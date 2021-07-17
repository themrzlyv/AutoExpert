import { useAppSelector } from '@src/app/hooks.store';
import { menuWizardData } from '@src/infrastructure/services/selectors/appTools/Menu';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface iProps {
  showMenu?: boolean;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  navHeight?: boolean;
}

const NavMenuContainer = styled.div<iProps>`
  width: ${({ showMenu }) => (showMenu ? '85%' : '100%')};
  height: ${({ navHeight }) => (navHeight ? '6em' : '4em')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in;
  padding: 0 3em;
  z-index: 1;
  @media (max-width: 1300px) {
    width: ${({ showMenu }) => (showMenu ? '80%' : '100%')};
  }
  @media (max-width: 1100px) {
    width: ${({ showMenu }) => (showMenu ? '70%' : '100%')};
  }
  @media (max-width: 700px) {
    width: ${({ showMenu }) => (showMenu ? '55%' : '100%')};
  }
`;

const NavMenu: React.FC<iProps> = ({ children }) => {
  const [height, setHeight] = useState(true);

  const { showMenu } = useAppSelector(menuWizardData);

  const changeNavbarHeight = () => {
    window.scrollY >= 96 ? setHeight(false) : setHeight(true);
  };

  window.addEventListener('scroll', changeNavbarHeight);

  return (
    <NavMenuContainer showMenu={showMenu} navHeight={height}>
      {children}
    </NavMenuContainer>
  );
};

export default NavMenu;
