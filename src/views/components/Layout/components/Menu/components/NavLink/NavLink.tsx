import React from 'react';
import styled from 'styled-components';
import { NavLink as Link, NavLinkProps } from 'react-router-dom';
import * as H from 'history';

interface iProps extends NavLinkProps {
  children: React.ReactNode;
  to:
    | H.LocationDescriptor<unknown>
    | ((location: H.Location<unknown>) => H.LocationDescriptor<unknown>);
}

interface iContainer {
  activeClassName: string;
}

const NavLinkContainer = styled(Link)<iContainer>`
  position: relative;
  color: black;
  font-size: 1.1em;
  padding: 0.35em;
  margin-bottom: 0.7em;
  margin-left: 1em;
  &:first-child {
    margin-top: 3.3em;
  }
  &:hover {
    color: #17139c;
  }
  &.${({ activeClassName }) => activeClassName} {
    color: #17139c;
    position: relative;
  }
`;

const NavLink: React.FC<iProps> = ({ children, to }) => {
  return (
    <NavLinkContainer to={to} activeClassName="active">
      {children}
    </NavLinkContainer>
  );
};

export default NavLink;
