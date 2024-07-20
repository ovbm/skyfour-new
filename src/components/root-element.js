import React, { Fragment } from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  return (
    <Fragment>
      {children}
      <script
        src="https://www.googletagmanager.com/gtag/js?id=G-8H75VMWEYW"
      />
      <script
        id="google-analytics"
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
                console.log("gtag");
                
                gtag('config', 'G-8H75VMWEYW', { send_page_view: false });
                `,
        }}
      />
    </Fragment>
  );
};

export default RootElement;
