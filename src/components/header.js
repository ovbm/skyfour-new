import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Link from './link';
import theme from '../utils/themeconstants';

import SkyfourLogo from './logo';

const Header = ({ dark, siteTitle, burgerClick, parent }) => {
  const [isSticky, setIsSticky] = useState(false);
  const linkcolor = isSticky ? 'black' : dark ? 'white' : 'black';

  const handleScroll = (event) => {
    const stick = window.scrollY > 0;
    setIsSticky(stick);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <TopHeader isSticky={isSticky}>
      <Container>
        <Navigation>
          <List>
            <Item className="logo">
              <Link to="/">
                <SkyfourLogo dark={isSticky ? false : dark} width={90} alt={siteTitle} />
              </Link>
            </Item>
            <Item className="primary">
              <List>
                <Item dark={dark} isSticky={isSticky}>
                  <Link to="/" linkcolor={linkcolor}>
                    Skyfour
                  </Link>
                </Item>
                <Item dark={dark} isSticky={isSticky}>
                  <Link to="/musik-repertoire" linkcolor={linkcolor}>
                    Repertoire
                  </Link>
                </Item>
                <Item dark={dark} isSticky={isSticky}>
                  <Link to="/hochzeiten" linkcolor={linkcolor}>
                    Hochzeiten
                  </Link>
                </Item>
                <Item dark={dark} isSticky={isSticky}>
                  <Link to="/kunden-und-referenzen" linkcolor={linkcolor}>
                    Referenzen
                  </Link>
                </Item>
                <Item dark={dark} isSticky={isSticky}>
                  <Link to="/kontakt" linkcolor={linkcolor}>
                    Kontakt
                  </Link>
                </Item>
              </List>
            </Item>
            <Item
              className="burger"
              onClick={burgerClick}
              linkcolor={linkcolor}
            >
              Menu
            </Item>
          </List>
        </Navigation>
      </Container>
    </TopHeader>
  );
};

export default Header;

const TopHeader = styled.header`
  position: ${(props) => (props.isSticky ? 'fixed' : 'absolute')};
  background-color:  ${(props) => (props.isSticky ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)')};
  top: 0;
  padding: 20px 0px;
  width: 100%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    position: absolute;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 0 2em;
  }
`;

const Navigation = styled.nav`
  display: block;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  li a {
    margin: 0 0 0 2em;
    font-weight: 600;
  }
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  font-family: 'Nunito Sans', 'Helvetica Neue', 'Arial', 'sans-serif';
  a {
    white-space: nowrap;
    text-shadow: ${(props) =>
      props.dark && !props.isSticky ? '0px 0px 10px rgba(0,0,0,0.8)' : null};
    transition: text-shadow 0.2s;
  }
  &.logo {
    a {
      margin: 0;
    }
  }
  &.primary {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      display: none;
    }
  }
  &.burger {
    color: ${(props) => props.linkcolor};
    display: none;
    height: 40px;
    font-weight: bold;
    cursor: pointer;
    @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
      display: list-item;
    }
  }
`;
