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
import Formationen from '../components/sections/formationen';
import ListeningSamples from '../components/sections/listening-samples';
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
            fluid(maxWidth: 1920, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );
  return (
    <Layout dark>
      <SEO
        title="Hochzeitsband Skyfour - Die Live Band für Hochzeiten. Partymusik, Hochzeitsmusik und Live Jazz"
        description="Skyfour is die Live Band für Hochzeiten. Die Hochzeitsband Skyfour sorgt für die pefekte musikalische Begleitung."
      />
      <StyledBackgroundImage
        strength={200}
        bgImage={backgroundwedding.childImageSharp.fluid.src}
        bgImageStyle={{ objectFit: 'cover' }}
        alt="Hochzeitsband Skyfour"
      >
        <GridContainer>
          <Row>
            <Col md={6} offset={{ md: 6 }}>
              <StageTitle>
                <GridContainer>
                  <h1>Magische Hochzeiten mit der Hochzeitsband Skyfour</h1>
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
              <p>Über 120 Hochzeiten in der Schweiz begleitet seit 2014.</p>
            </StyledCol>
            <StyledCol md={4}>
              <h2>360</h2>
              <p>
                Mehr als 360 Stunden stimmungsvolle Musik und tolle Atmosphäre.
              </p>
            </StyledCol>
            <StyledCol md={4}>
              <h2>1000</h2>
              <p>Unvergessliche Momente</p>
            </StyledCol>
          </Row>
        </GridContainer>
      </Section>
      <Testemonials />
      <ListeningSamples />
      <Formationen />
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
    color: white;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.4);
  }
  p {
    line-height: 1.2;
    color: white;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.4);
  }
  h3 {
    font-weight: lighter;
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
