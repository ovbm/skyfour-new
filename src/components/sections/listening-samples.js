import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Section from '../section';
import theme from '../../utils/themeconstants';

import Playlist from '../playlist';

const ListeningSamples = () => {
  const { bgPlaylistDesktop, bgPlaylistMobile } = useStaticQuery(
    graphql`
      query {
        bgPlaylistDesktop: file(relativePath: { eq: "background2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        bgPlaylistMobile: file(relativePath: { eq: "background2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 720, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );
  const sources = [
    bgPlaylistDesktop.childImageSharp.fluid,
    {
      ...bgPlaylistMobile.childImageSharp.fluid,
      media: `(max-width: ${theme.dim.mobilebreakpoint}px)`,
    },
  ]
  return (
    <StyledBackgroundImage
      fluid={sources}
      backgroundColor="#000000"
    >
      <GridContainer>
        <Row>
          <h2
            style={{
              width: '100%',
              margin: '0 auto 1.5em auto',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Hörproben
          </h2>
          <Col md={6} offset={{ md: 3 }}>
            <Playlist />
          </Col>
        </Row>
      </GridContainer>
    </StyledBackgroundImage>
  );
};

export default ListeningSamples;

const StyledBackgroundImage = styled(BackgroundImage)`
  padding: 6em 0 4em 0;
  background-color: ${(props) =>
    props.dark ? 'black' : theme.colors.bgPrimary};
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1em 2em 1em;
  }
`;
