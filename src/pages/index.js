import React, { usEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
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

export default () => {
  const { background1 } = useStaticQuery(
    graphql`
      query {
        background1: file(relativePath: { eq: "background1.jpg" }) {
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
        title="Hochzeitsband und Partyband Skyfour - Buchen Sie Partymusik, Hochzeitsmusik und Live Jazz"
        description="Live-Band und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband."
      />
      <StyledBackgroundImage
        strength={200}
        bgImage={background1.childImageSharp.fluid.src}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <GridContainer>
          <Row>
            <Col md={6}>
              <StageTitle>
                <GridContainer>
                  <h1 style={{textShadow: '0px 0px 10px rgba(0,0,0,0.4)'}}>
                    Hochzeitsband und Partyband Skyfour
                    <br />
                    <span style={{ fontSize: '0.4em' }}>
                      Musik für unvergessliche Momente
                    </span>
                  </h1>
                  <p style={{ marginBottom: '2.2rem', textShadow: '0px 0px 10px rgba(0,0,0,0.4)', lineHeight: 1.5 }}>
                    Ihre Live Band für den perfekten Sound. Ob intimer Jazz oder
                    energetische Partymusik, wir sorgen für die richtige
                    Stimmung.
                  </p>
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
          <div style={{ maxWidth: 600, margin: '2em auto 0' }}>
            <PlayerWrapper>
              <iframe
                title="skyfour video"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                src="https://www.youtube.com/embed/QgZj0oc_NBQ"
                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/QgZj0oc_NBQ?autoplay=1><img src=https://img.youtube.com/vi/QgZj0oc_NBQ/hqdefault.jpg alt='Skyfour'><span>▶</span></a>"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </PlayerWrapper>
          </div>
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
  }
  p {
    line-height: 1.2;
    color: white;
  }
  h3 {
    font-weight: lighter;
    margin-bottom: 8px;
    color: white;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
`;
