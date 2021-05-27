import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ dark, width }) => (
  <StaticQuery
    query={graphql`
      query {
        logoBlack: file(relativePath: { eq: "skyfour-logo-schwarz.png" }) {
          childImageSharp {
            gatsbyImageData(width: 140, placeholder: NONE)
          }
        }
        logoWhite: file(relativePath: { eq: "skyfour-logo-weiss.png" }) {
          childImageSharp {
            gatsbyImageData(width: 140, placeholder: NONE)
          }
        }
      }
    `}
    render={(data) =>
      dark ? (
        <GatsbyImage
          alt="skyfour logo white"
          placeholder="none"
          backgroundColor="transparent"
          style={{ width }}
          image={data.logoWhite.childImageSharp.gatsbyImageData}
        />
      ) : (
        <GatsbyImage
          alt="skyfour logo black"
          placeholder="none"
          backgroundColor="transparent"
          style={{ width }}
          image={data.logoBlack.childImageSharp.gatsbyImageData}
        />
      )
    }
  />
);

export default Logo;
