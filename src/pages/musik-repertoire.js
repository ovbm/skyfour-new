import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { Parallax, Background } from 'react-parallax';

import Section from '../components/section';
import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Arrow from '../components/arrow';
import Offerte from '../components/sections/offerte';

export default () => {
  const { background2 } = useStaticQuery(
    graphql`
      query {
        background2: file(relativePath: { eq: "background2.jpg" }) {
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
        bgImage={background2.childImageSharp.fluid.src}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <GridContainer>
          <Row>
            <Col md={6}>
              <StageTitle>
                <h1>Repertoire</h1>
                <p style={{ marginBottom: '2.2rem' }}>
                  Gerne berücksichtigen wir Ihre individuellen Songwünsche.
                  Werfen Sie einen Blick auf unsere Songliste.
                </p>
                <Button outward color="white" href="/Repertoire-Skyfour.pdf">
                  Repertoire (PDF)
                </Button>
              </StageTitle>
            </Col>
          </Row>
        </GridContainer>
        <Arrow />
      </StyledBackgroundImage>
      <Section>
        <GridContainer>
          <Row>
            <h2
              style={{
                width: '100%',
                margin: '0 auto 1.5em auto',
                textAlign: 'center',
              }}
            >
              Unsere Formationen
            </h2>
            <Col md={6}>
              <h3 style={{ marginBottom: '0.25em' }}>Vocal Duo</h3>
              <p style={{ fontWeight: 600, marginBottom: '0.5em' }}>
                Gesang und Piano
              </p>
              <p style={{ marginBottom: '2em' }}>
                Live Musik für Trauungen, Apéros und andere intime Momente.
              </p>
              <h3 style={{ marginBottom: '0.25em' }}>
                Jazzband im Tiro oder Guartett
              </h3>

              <p style={{ fontWeight: 600, marginBottom: '0.5em' }}>
                Piano, Bass, Schlagzeug und Gesang
              </p>
              <p>
                Unsere professionellen Jazzmusiker für Apéros, Hochzeiten,
                Dinners, Geschäftsanlässe, Firmenevents und Messen.
              </p>
            </Col>
            <Col md={6}>
              <h3 style={{ marginBottom: '0.25em' }}>Partyband</h3>
              <p style={{ fontWeight: 600, marginBottom: '0.5em' }}>
                Gesang, Piano, Bass und Schlagzeug
              </p>
              <p style={{ marginBottom: '2em' }}>
                Energiegeladene Partymusik verführt zum Tanzen, als
                Hochzeitsband oder für andere Events und Partys.
              </p>
              <p>
                * Auf Wunsch sind auch Formationen mit Gitarre (Pop) oder
                Saxophon (Jazz Trio) möglich.
              </p>
            </Col>
          </Row>
        </GridContainer>
      </Section>
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
  animation-delay: 0;
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
