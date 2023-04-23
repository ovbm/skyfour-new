import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/contactform';

const Kontakt = () => (
  <Layout>
    <SEO
      title="Hochzeitsband und Partyband Skyfour - Konkakt und unverbindliche Offerte"
      description="Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband. Kontaktieren Sie uns um die richtige Musik für Ihren Event zu
        finden!"
    />
    <StyledBackgroundImage>
      <StageTitle>
        <GridContainer>
          <Row>
            <Col md={6}>
              <GridContainer>
                <h2>Kontakt</h2>
                <p>
                  Kontaktieren Sie uns um die richtige Musik für Ihren Event zu
                  finden!
                </p>
                <p>
                  Teilen Sie uns Anlass, Datum, Ort, gewünschte Spieldauer und
                  spezielle Musikwünsche mit. Wir melden uns umgehend mit einer
                  passenden Offerte bei Ihnen.
                </p>
                <p>
                  Sie können sich auch per Email an{' '}
                  <OutboundLink href="mailto:kontakt@skyfour.ch">
                    kontakt@skyfour.ch
                  </OutboundLink>{' '}
                  wenden oder telefonisch unter{' '}
                  <OutboundLink href="tel:+41795388936">
                    079 538 89 36
                  </OutboundLink>{' '}
                  .
                </p>
              </GridContainer>
            </Col>
            <Col md={6}>
              <ContactForm />
            </Col>
          </Row>
        </GridContainer>
      </StageTitle>
    </StyledBackgroundImage>
  </Layout>
);

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

const StageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appear} 0.8s ease;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  h1 {
  }
  p {
    line-height: 2;
  }
  h3 {
    font-weight: lighter;
    margin-bottom: 8px;
  }
`;

const StyledBackgroundImage = styled.div`
  padding: 8em 0;
  overflow: hidden;
  animation: ${appearScale} 0.8s ease;
  animation-delay: 0;
  opacity: 0;
  animation-fill-mode: forwards;
`;

export default Kontakt;
