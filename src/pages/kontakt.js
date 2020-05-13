import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../utils/themeconstants';
import ContactForm from '../components/contactform';

export default () => {
  return (
    <Layout>
      <SEO
        title="Skyfour - Hochzeitsband und Partyband - Buchen Sie Partymusik, Hochzeitsmusik und Live Jazz"
        description="Live-Band und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband."
      />
      <StyledBackgroundImage>
        <StageTitle>
          <GridContainer>
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
                  Sie können sich auch per Email an
                  {' '}
                  <OutboundLink href="mailto:ramon.oliveras@skyfour.ch">
                    ramon.oliveras@skyfour.ch
                  </OutboundLink>
                  {' '}
                  wenden oder telefonisch unter
                  {' '}
                  <OutboundLink href="tel:+41798256354">
                    079 825 63 54
                  </OutboundLink>
                  {' '}
                  .
                </p>
              </GridContainer>
            </Col>
            <Col md={6}>
              <ContactForm />
            </Col>
          </GridContainer>
        </StageTitle>
      </StyledBackgroundImage>
    </Layout>
  );
};

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
    font-size: 42px;
  }
  p {
    line-height: 2;
  }
  h3 {
    font-weight: lighter;
    font-size: 18px;
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
