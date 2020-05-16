import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeEurope,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import theme from '../utils/themeconstants';
import SkyfourLogo from './logo';

function Footer() {
  return (
    <Container>
      <Content>
        <div className="column">
          <SkyfourLogo width={90} alt="skyfour" />
        </div>
        <div className="column">
          <p>
            <FontAwesomeIcon
              style={{ marginRight: 6 }}
              color="black"
              icon={faGlobeEurope}
            />
            8045 Zürich
          </p>
        </div>
        <div className="column">
          <p>
            <FontAwesomeIcon
              style={{ marginRight: 6 }}
              color="black"
              icon={faPhoneAlt}
            />
            <OutboundLink href="tel:+41798256354‬">0798256354‬</OutboundLink>
          </p>
        </div>
        <div className="column">
          <div>
            <FontAwesomeIcon
              style={{ marginRight: 6 }}
              color="black"
              icon={faEnvelope}
            />

            <OutboundLink href="mailto:ramon.oliveras@skyfour.ch">
              ramon.oliveras@skyfour.ch
            </OutboundLink>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  z-index: 999;
  padding: 4em;
  background-color: ${theme.colors.bgSecondary};
  color: ${theme.colors.primary};
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 2em;
  }
`;

const Content = styled.div`
  max-width: ${theme.dim.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .column {
    align-content: center;
    margin: 0 1.5em;
    p {
      margin: 0;
    }
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      margin: 0 0 1.5em 0;
    }
  }
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    flex-direction: column;
  }
`;