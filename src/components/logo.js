import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Logo = ({ dark, width }) => (
  <StaticQuery
    query={graphql`
      query {
        logoBlack: file(relativePath: { eq: "skyfour-logo-schwarz.png" }) {
          childImageSharp {
            fluid(maxWidth: 140) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        logoWhite: file(relativePath: { eq: "skyfour-logo-weiss.png" }) {
          childImageSharp {
            fluid(maxWidth: 140) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={
      (data) => (
        dark 
          ? <Img style={{ width }} fluid={data.logoWhite.childImageSharp.fluid} /> 
          : <Img style={{ width }} fluid={data.logoBlack.childImageSharp.fluid} />
      ) 
    }
  />
);

export default Logo;
