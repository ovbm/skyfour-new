const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');

const mailgun = require('mailgun-js')({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN,
  host: 'api.eu.mailgun.net',
});

// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these requests.

exports.sendMail = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const busboy = new Busboy({ headers: req.headers });
    const tmpdir = os.tmpdir();

    // This object will accumulate all the fields, keyed by their name
    const fields = {};

    // This code will process each non-file field in the form.
    busboy.on('field', (fieldname, val) => {
      // Process submitted field values here
      console.log(`Processed field ${fieldname}: ${val}.`);
      fields[fieldname] = val;
    });

    // Triggered once all uploaded files are processed by Busboy.
    // We still need to wait for the disk writes (saves) to complete.
    busboy.on('finish', () => {
      // Process saved files
      // create email for skyfour
      const skyfourmaildata = {
        from: `${fields.email}`,
        to: 'kontakt@skyfour.ch',
        subject: `Skyfour Anfrage ${fields.name}`,
        html: ` <html>
                      <head>
                        <title>Skyfour Anfrage ${fields.name}</title>
                      </head>
                      <body>
                        <p>Nachricht:</p>
                        <p>${fields.message.replace('\n', '<br />')}</p>
                      </body>
                    </html>
                  `,
      };

      // create email for user
      const usermaildata = {
        from: 'kontakt@skyfour.ch',
        to: `${fields.email}`,
        subject: `Vielen Dank für Ihre Skyfour Anfrage`,
        html: ` <html>
                      <head>
                        <title>Vielen Dank für Ihre Skyfour Anfrage</title>
                      </head>
                      <body>
                        <p>Hallo ${fields.name}<p>
                        <p>Herzlichen Dank für Ihre Anfrage.<p>
                        <p>Wir melden uns umgehend mit einer Offerte bei Ihnen.</p>
                        <p>Freundliche Grüsse.</p>
                        <p>Skyfour</p>
                      </body>
                    </html>
                  `,
      };

      // send mail to kontakt@skyfour.ch
      mailgun.messages().send(skyfourmaildata, (err, body) => {
        if (err) {
          // log error
          console.error(err || new Error(`Error: ${err} Body: ${body}`));
          // return error status
          return res.status(500).send('Email - Unknown server error');
        }
        // if no error, send confirmation mail to applicant
        mailgun.messages().send(usermaildata, (usererr, userbody) => {
          if (usererr) {
            // log error
            console.error(
              usererr || new Error(`Error: ${usererr} Body: ${userbody}`),
            );
            // return error status
            return res.status(500).send('User Email - Unknown server error');
          }
          // return success
          return res
            .status(200)
            .send(
              'Danke für Ihre Kontaktaufnahme. Wir melden uns umgehend bei Ihnen.',
            );
        });
        return null;
      });
    });
    busboy.end(req.rawBody);
  }
};

