import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { Parallax } from 'react-parallax';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Section from '../components/section';
import Offerte from '../components/sections/offerte';
import ListeningSamples from '../components/sections/listening-samples';
import Formationen from '../components/sections/formationen';
import Arrow from '../components/arrow';

const Index = () => {
  const { background1 } = useStaticQuery(
    graphql`
      query {
        background1: file(relativePath: { eq: "background1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 90)
          }
        }
      }
    `,
  );
  return (
    <Layout dark>
      <SEO
        title="Hochzeitsband und Partyband Skyfour - Buchen Sie Partymusik, Hochzeitsmusik und Live Jazz"
        description="Liveband und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband."
      />
      <StyledBackgroundImage
        strength={200}
        bgImage={getSrc(background1)}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <GridContainer>
          <Stage>
            <Row>
              <Col md={6}>
                <GridContainer>
                  <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <PlayerWrapper>
                      <iframe
                        title="skyfour video"
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        src="https://www.youtube.com/embed/ulg5uH86_mM"
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/ulg5uH86_mM?autoplay=1><img src=https://img.youtube.com/vi/ulg5uH86_mM/maxresdefault.jpg alt='Skyfour'><span>▶</span></a>"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </PlayerWrapper>
                  </div>
                </GridContainer>
              </Col>
              <Col md={6}>
                <GridContainer>
                  <H1>Hochzeitsband und Partyband Skyfour</H1>
                  <TaglineP>Musik für unvergessliche Momente</TaglineP>
                  <MissionP>
                    Ihre Live Band für den perfekten Sound. Ob intime Jazzband
                    oder energetische Partymusik, wir sorgen für die richtige
                    Stimmung.
                  </MissionP>
                </GridContainer>
              </Col>
            </Row>
          </Stage>
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
              Skyfour, Ihre Live Partyband
            </h2>
            <Col md={6}>
              <p style={{ marginBottom: '2em' }}>
                Skyfour spielt von live Jazz über Pop und Rnb, bis zur aktuellen
                Hitparade, alles was Sie sich wünschen. Suchen Sie ein Duo mit
                Gesang und Piano für ihre Hochzeit, eine dezente Jazzband für
                ihren Event, oder die volle Partymusik mit der ganzen Live Band
                für ihre Party? Wir helfen ihnen gerne, für ihren Anlass die
                richtige Formation zu finden!
              </p>
            </Col>
            <Col md={6}>
              <p>
                Die Profimusiker der Live Band Skyfour sind sowohl bezüglich
                Formation und Stil äusserst flexibel und verleihen ihrem Event
                das richtige Ambiente. Ob für Hochzeiten, Geburtstags-,
                Weihnachtsfeiern oder Firmenevents, profitieren Sie von unserer
                Erfahrung und lassen Sie sich unverbindlich beraten.
              </p>
            </Col>
          </Row>
        </GridContainer>
      </Section>
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
  animation-delay: 0;
  opacity: 0;
  animation-fill-mode: forwards;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    height: auto;
  }
`;

const Stage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  color: white;
`;

const H1 = styled.h1`
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  line-height: 1.1em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 1.75em;
    line-height: 1.5em;
  }
`;

const TaglineP = styled.p`
  font-size: 1.25em;
  font-weight: bold;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 1.15em;
  }
`;

const MissionP = styled.p`
  margin-bottom: 2.2rem;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
  font-weight: bold;
  font-size: 1.1em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 0.9em;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    margin: 4em 0 2em 0;
  }
`;

export default Index;
