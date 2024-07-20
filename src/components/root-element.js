import React, { Fragment } from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8H75VMWEYW`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'ad_storage': 'denied',
                });
                
                gtag('config', 'G-8H75VMWEYW', { send_page_view: false });
                `,
        }}
      />
      <div>{children}</div>
    </Fragment>
  );
};

export default RootElement;
