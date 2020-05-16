import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Parallax } from 'react-parallax';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import Section from '../components/section';

import kundeSwisscom from '../images/kunden/kunde_swisscom.png';
import kundeKkl from '../images/kunden/kunde_kkl.png';
import kundeFlughafen from '../images/kunden/kunde_flughafen.png';
import kundeMuseumgestaltung from '../images/kunden/kunde_museumgestaltung.png';
import kundeSavoy from '../images/kunden/kunde_savoy.png';
import kundeSix from '../images/kunden/kunde_six.png';
import kundeZkb from '../images/kunden/kunde_zkb.png';
import kundeMarmite from '../images/kunden/kunde_marmite.png';

export default () => {
  const { background } = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "bg-new.jpg" }) {
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
    <Layout>
      <SEO
        title="Hochzeitsband und Partyband Skyfour - Referenzen"
        description="Live-Band und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband. Auswahl von Kunden, deren Events wir musikalisch
        begleiten durften."
        keywords={[
          'partyband',
          'liveband',
          'band für hochzeiten',
          'jazzband',
          'event band',
          'band buchen',
          'hochzeitsband',
          'schweiz',
        ]}
      />
      <StyledParallax
        strength={200}
        bgImage={background.childImageSharp.fluid.src}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <StageTitle>
          <GridContainer>
            <Row style={{ marginBottom:'4em' }}>
              <Col md={6} offset={{ md: 3 }}>
                <h2>Unsere Referenzen</h2>
                <p>
                  Eine kleine Auswahl von Kunden, deren Events wir musikalisch
                  begleiten durften.
                </p>
              </Col>
            </Row>
            <Row justify="center">
              <LogoBox md={3}>
                <KundenLogo src={kundeSwisscom} alt="Kunde Swisscom" />
              </LogoBox>
              <LogoBox md={3}>
                <KundenLogo src={kundeKkl} alt="Kunde KKL" />
              </LogoBox>
              <LogoBox md={3}>
                <KundenLogo src={kundeFlughafen} alt="Kunde Flughafen Zürich" />
              </LogoBox>
            </Row>
            <Row justify="center">
              <LogoBox md={3}>
                <KundenLogo
                  src={kundeMuseumgestaltung}
                  alt="Kunde Museum für Gestaltung"
                />
              </LogoBox>
              <LogoBox md={3}>
                <KundenLogo src={kundeSavoy} alt="Kunde Savoy" />
              </LogoBox>
              <LogoBox md={3}>
                <KundenLogo src={kundeSix} alt="Kunde SIX" />
              </LogoBox>
            </Row>
            <Row justify="center">
              <LogoBox md={3}>
                <KundenLogo src={kundeZkb} alt="Kunde ZKB" />
              </LogoBox>
              <LogoBox md={3}>
                <KundenLogo src={kundeMarmite} alt="Kunde Marmite" />
              </LogoBox>
            </Row>
          </GridContainer>
        </StageTitle>
      </StyledParallax>
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

const StageTitle = styled.div`
  margin: 6em 0 4em;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const LogoBox = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4em;
`;

const KundenLogo = styled.img`
  max-width: 200px;
  max-height: 60px;
  margin: 0;
  opacity: 0.5;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    max-width: 240px;
    max-height: 100px;
  }
`;

const StyledParallax = styled(Parallax)`
  padding: 4em 0 4em 0;
  background-color: ${(props) =>
    props.dark ? 'black' : theme.colors.bgPrimary};
  animation: ${appearScale} 0.8s ease;
  animation-delay: 0s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin: 0;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1em 2em 1em;
  }
`;
