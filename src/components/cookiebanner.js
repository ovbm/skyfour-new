import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import theme from '../utils/themeconstants';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(Cookies.get('gtag-responded') !== 'true');
  }, []);

  useEffect(() => {
    if (Cookies.get('gtag-consent') !== 'true') {
      return;
    } else {
      initTracking();
    }
  }, [Cookies.get('gtag-consent')]);

  const initTracking = () => {
    if (typeof window.gtag !== 'undefined') {
      console.log('init tracking');
      window.gtag('consent', 'update', {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleAccept = () => {
    Cookies.set('gtag-consent', true, { expires: 365 });
    handleCloseAll();
  };

  const handleDecline = () => {
    Cookies.remove('gtag-consent');
    handleCloseAll();
  };

  const handleCloseAll = () => {
    setShowBanner(false);
    Cookies.set('gtag-responded', true, { expires: 365 });
  };

  if (showBanner) {
    return (
      <Container>
        <p>
          {' '}
          Unsere Website setzt Cookies von Google Analytics ein, um die Nutzung
          zu analysieren. Mit dem Klicken auf "Akzeptieren" stimmen Sie dem zu.
        </p>
        <StyledButton
          style={{
            backgroundColor: theme.colors.blue,
            color: 'white',
          }}
          onClick={() => handleAccept()}
        >
          Akzeptieren
        </StyledButton>
        <StyledButton
          style={{ backgroundColor: theme.colors.bgTertiary }}
          onClick={() => handleDecline()}
        >
          Ablehnen
        </StyledButton>
      </Container>
      // add your component logic here
      // Take not of the different functions that are available above, like handleAccept / handleDecline / handleCloseAll
      // handleCloseAll -> if a user declines / closes the banner
      // handleAccept -> a button to accept by default
      // handleDecline -> a button to decline the cookies
    );
  } else return null;
};

export default CookieBanner;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  padding: 4em;
  background-color: ${theme.colors.bgSecondary};
  color: ${theme.colors.primary};
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 2em;
  }
`;

const StyledButton = styled.button`
  border-radius: 4px;
  margin-right: 16px;
  border: none;
  font-weight: bold;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }
`;
