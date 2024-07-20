import React from 'react';
import styled from 'styled-components';

import Link from './link';
import theme from '../utils/themeconstants';
import OutboundLink from './OutboundLink';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.div`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  div {
    display: inline-block;
    color: ${(props) =>
      props.color === 'white' || props.color === '#FFFFFF'
        ? theme.colors.primary
        : 'white'};
    background-color: ${(props) => props.color};
    border-radius: 8px;
    align-self: center;
    vertical-align: middle;
    margin-bottom: 1em;
    white-space: nowrap;
    text-align: center;
    padding: 4px 16px;
    text-decoration: none;
    transition: box-shadow 0.2s linear;
    &:hover {
      box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Button = ({ children, color, to, href, outward, textColor, justify }) =>
  outward ? (
    <OutboundLink style={{ textDecoration: 'none' }} href={href}>
      <StyledButton color={color} justify={justify}>
        <div style={{ color: textColor }}>{children}</div>
      </StyledButton>
    </OutboundLink>
  ) : (
    <StyledLink style={{ textDecoration: 'none' }} to={to}>
      <StyledButton color={color} justify={justify}>
        <div style={{ color: textColor }}>{children}</div>
      </StyledButton>
    </StyledLink>
  );
export default Button;
