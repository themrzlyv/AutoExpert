import React from 'react';
import styled from 'styled-components';
import { NavLink as Link, NavLinkProps } from 'react-router-dom';
import * as H from 'history';

interface Iprops extends NavLinkProps {
  children: React.ReactNode;
  to:
    | H.LocationDescriptor<unknown>
    | ((location: H.Location<unknown>) => H.LocationDescriptor<unknown>);
}

interface Icontainer {
  activeClassName: string;
}

const NavLinkContainer = styled(Link)<Icontainer>`
  position: relative;
  color: white;
  margin: 1em 0;
  padding: 0.5em 0;
  &::after {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    transition: width 0.3s, easy;
  }
  &:hover {
    color: #eaeaead0;
  }
  &.${({ activeClassName }) => activeClassName} {
    color: #eaeaead0;
    position: relative;
  }
  &.${({ activeClassName }) => activeClassName}::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #eaeaead0;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
    color: white;
    margin: 0;
    padding: 2.16em 0;

    &.${({ activeClassName }) => activeClassName}::after {
      width: 0%;
    }

    &:hover {
      color: black;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }

    &.${({ activeClassName }) => activeClassName} {
      color: black;
      background-color: white;
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }
`;

const NavLink: React.FC<Iprops> = ({ children, to }) => {
  return (
    <NavLinkContainer to={to} activeClassName="active">
      {children}
    </NavLinkContainer>
  );
};

export default NavLink;
