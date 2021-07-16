import React from 'react';
import styled from 'styled-components';

interface Iprops {
  showMenu?: boolean;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenuContainer = styled.div<Iprops>`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s ease-out;
  @media screen and (max-width: 1200px) {
    position: absolute;
    width: 100%;
    height: 75vh;
    top: 4.8em;
    left: 0;
    background-color: #050256;
    flex-direction: column;
    /* justify-content: space-between; */
    overflow: hidden;
    align-items: center;
    margin-left: ${({ showMenu }) => (showMenu ? '0' : '-120%')};
    transition: all 0.3s ease-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    z-index: 1;
  }
`;

const NavMenu:React.FC<Iprops> = ({ children, showMenu }) => {
  return (
    <NavMenuContainer showMenu={showMenu}>
      {children}
    </NavMenuContainer>
  );
};

export default NavMenu;
