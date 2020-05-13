


import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import theme from '../utils/themeconstants';

export default () => (
  <AnimatedArrow size="2x" color="white" icon={faChevronDown} />
)

const arrowBounce = keyframes`
from {
  opacity: 0;
  transform: translateY(-10px);
}

to {
  opacity: 1;
  transform: translateY(0px);
}
`;

const AnimatedArrow = styled(FontAwesomeIcon)`
position: absolute;
transform: translateX(50%);
box-shadow: 0 0 15 rgba(0,0,0,0.8);
bottom: 1em;
left: 50%;
margin-left: -15px;
animation: ${arrowBounce} 2s ease;
animation-delay: 0;
opacity: 0;
animation-iteration-count: infinite;
animation-fill-mode: forwards;
@media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
  bottom: 2em;
  }
`;