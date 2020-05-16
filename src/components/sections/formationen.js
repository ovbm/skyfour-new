import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';

import Section from '../section';

const Formationen = () => {
  return (
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
              Jazzband im Trio oder Quartett
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
              Energiegeladene Partymusik verführt zum Tanzen, als Hochzeitsband
              oder für andere Events und Partys.
            </p>
            <p>
              * Auf Wunsch sind auch Formationen mit Gitarre (Pop) oder Saxophon
              (Jazz Trio) möglich.
            </p>
          </Col>
        </Row>
      </GridContainer>
    </Section>
  );
};

export default Formationen;
