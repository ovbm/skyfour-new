import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
/* This makes sure that the css from fontawesome is loaded before the icon is displayed */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  previewImageURL,
  url,
}) {
  return (
    <StaticQuery
      query={graphql`
        query DefaultSEOQuery {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title || data.site.siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription || data.site.siteMetadata.description,
              },
              {
                property: 'og:image',
                name: 'image',
                content:
                  previewImageURL || 'https://skyfour.ch/skyfour-social.png',
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:url',
                content: url || 'https://www.slyfour.ch',
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content:
                  previewImageURL || 'https://skyfour.ch/skyfour-social.png',
              },
              {
                name: 'twitter:site',
                content: '@tmrowco',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : [],
              )
              .concat(meta)}
          >
            <style type="text/css">
              {` 
                body {
                  -webkit-font-smoothing: antialiased;
                  background-color: #F6F9FC;
                }
              `}
            </style>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'de',
  meta: [],
  keywords: [
    'partyband',
    'liveband',
    'band für hochzeiten',
    'jazzband',
    'event band',
    'band buchen',
    'hochzeitsband',
    'schweiz',
  ],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
