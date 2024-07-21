import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import theme from '../../utils/themeconstants';
import Playlist from '../playlist';

const ListeningSamples = () => (
  <StyledContainer>
    <GridContainer>
      <Row>
        <h2
          style={{
            width: '100%',
            margin: '0 auto 1.5em auto',
            textAlign: 'center',
            color: 'white',
          }}
        >
          Hörproben
        </h2>
        <Col md={6} offset={{ md: 3 }}>
          <Playlist />
        </Col>
      </Row>
    </GridContainer>
  </StyledContainer>
);

export default ListeningSamples;

const StyledContainer = styled.div`
  padding: 6em 0 4em 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    20deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1em 2em 1em;
  }
`;
