import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import Section from '../section';
import Button from '../button';
import theme from '../../utils/themeconstants';

const Offerte = () => {
  return (
    <Section>
      <GridContainer>
        <Row style={{ alignItems: 'center', flexDirection: 'column' }}>
          <p style={{ textAlign: 'center' }}>
            Holen Sie sich eine unverbindliche Offerte ein
          </p>
          <Button to="/kontakt" color={theme.colors.primary}>
            Offerte einholen
          </Button>
        </Row>
      </GridContainer>
    </Section>
  );
};

export default Offerte;
