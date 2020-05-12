import React from 'react'
import styled from 'styled-components';

import theme from '../utils/themeconstants';

const Section = ({children, dark}) => {
  return (
    <StyledSection dark={dark}>
      {children}
    </StyledSection>
  )
}

export default Section;

const StyledSection = styled.div`
  padding: 6em 0 4em 0;
  background-color: ${props => props.dark ? 'black' : theme.colors.bgPrimary};
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    padding: 4em 1em 2em 1em;
  }
`;
