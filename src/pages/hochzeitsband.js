import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Testemonials from '../components/sections/testemonials';
import Offerte from '../components/sections/offerte';
import Arrow from '../components/arrow';

export default () => {
  const { backgroundwedding } = useStaticQuery(
    graphql`
      query {
        backgroundwedding: file(
          relativePath: { eq: "background-wedding.jpg" }
        ) {
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
    <Layout dark>
      <SEO
        title="Skyfour - Hochzeitsband und Partyband - Buchen Sie Partymusik, Hochzeitsmusik und Live Jazz"
        description="Live-Band und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband."
      />
      <StyledBackgroundImage
        strength={200}
        bgImage={backgroundwedding.childImageSharp.fluid.src}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <GridContainer>
          <Row>
            <Col md={6} offset={{ md: 6 }}>
              <StageTitle>
                <GridContainer>
                  <h1>Magische Hochzeiten mit Skyfour</h1>
                  <List>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          style={{ marginRight: '6px' }}
                          color="white"
                          icon={faHeart}
                        />
                        Von Trauung über Dinner bis zur Party, alles aus einem
                        Guss.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          style={{ marginRight: '6px' }}
                          color="white"
                          icon={faHeart}
                        />
                        Inklusive Aufbau und Installation der Soundanlage vor
                        Ort.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          style={{ marginRight: '6px' }}
                          color="white"
                          icon={faHeart}
                        />
                        Beratung zu Ablauf und idealer musikalischen Begleitung.
                      </p>
                    </li>
                  </List>
                </GridContainer>
              </StageTitle>
            </Col>
          </Row>
        </GridContainer>
        <Arrow />
      </StyledBackgroundImage>
      <Section>
        <GridContainer>
          <Row>
            <StyledCol md={4}>
              <h2>120</h2>
              <p>Über 120 Hochzeiten begleitet seit 2014.</p>
            </StyledCol>
            <StyledCol md={4}>
              <h2>360</h2>
              <p>Mehr als 360 Stunden stimmungsvolle Begleitung.</p>
            </StyledCol>
            <StyledCol md={4}>
              <h2>1000</h2>
              <p>Unvergessliche Momente</p>
            </StyledCol>
          </Row>
        </GridContainer>
      </Section>
      <Testemonials />
      <Offerte />
    </Layout>
  );
};

const appear = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const appearScale = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledBackgroundImage = styled(Parallax)`
  height: 100vh;
  overflow: hidden;
  animation: ${appearScale} 0.8s ease;
  animation-delay: 0s;
  opacity: 0;
  animation-fill-mode: forwards;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    height: auto;
  }
`;

const StageTitle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  h1 {
    font-size: 42px;
    color: white;
  }
  p {
    line-height: 1.2;
    color: white;
  }
  h3 {
    font-weight: lighter;
    font-size: 18px;
    margin-bottom: 8px;
    color: white;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledCol = styled(Col)`
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    margin: 0;
  }
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    p {
      margin-bottom: 2em;
    }
  }
`;
