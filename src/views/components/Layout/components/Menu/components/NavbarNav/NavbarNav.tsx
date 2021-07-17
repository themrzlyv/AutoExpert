import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

interface iProps {
  xl: number;
  lg: number;
  md: number;
  xs: number;
}

const NavbarNavContainer = styled(Col)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavbarNav: React.FC<iProps> = ({ children, xl, lg, md, xs}) => {
  return (
    <NavbarNavContainer xl={xl} lg={lg} md={md} xs={xs}>
      {children}
    </NavbarNavContainer>
  );
};

export default NavbarNav;
