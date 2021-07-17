import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const NavbarContainer = styled(Row)`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgb(161 164 184 / 15%);
`;


const Navbar:React.FC = ({ children }) => {
  return (
    <NavbarContainer>
      {children}
    </NavbarContainer>
  );
};

export default Navbar;
