import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

import Section from '../section';
import theme from '../../utils/themeconstants';

import Playlist from '../playlist';

const ListeningSamples = () => {
  const { bgPlaylist } = useStaticQuery(
    graphql`
      query {
        bgPlaylist: file(relativePath: { eq: "background2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `,
  );
  return (
    <StyledParallax
      strength={200}
      bgImage={bgPlaylist.childImageSharp.fluid.src}
      bgImageStyle={{ objectFit: 'cover' }}
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
    </StyledParallax>
  );
};

export default ListeningSamples;

const StyledParallax = styled(Parallax)`
  padding: 6em 0 4em 0;
  background-color: ${(props) =>
    props.dark ? 'black' : theme.colors.bgPrimary};
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1em 2em 1em;
  }
`;
