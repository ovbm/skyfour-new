import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';

import Section from '../section';
import Button from '../button';
import theme from '../../utils/themeconstants';

const Offerte = () => (
  <Section>
    <GridContainer>
      <Row style={{ alignItems: 'center', flexDirection: 'column' }}>
        <p style={{ textAlign: 'center' }}>
          Holen Sie sich eine unverbindliche Offerte ein und buchen Sie Skyfour
          als Hochzeitsband, Partyband oder Jazzband.
        </p>
        <Button to="/kontakt" color={theme.colors.primary}>
          Offerte einholen
        </Button>
      </Row>
    </GridContainer>
  </Section>
);

export default Offerte;
