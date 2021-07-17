import { useAppSelector } from '@src/app/hooks.store';
import { menuWizardData } from '@src/infrastructure/services/selectors/appTools/Menu';
import React from 'react';
import styled from 'styled-components';

interface iProps {
  showMenu?: boolean;
}

const WizardContainer = styled.div<iProps>`
  width: 15em;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: ${({ showMenu }) => (showMenu ? '0' : '-20em')};
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  transition: all 0.3s ease-in;
  z-index: 1;
`;

const NavbarWizard: React.FC = ({ children }) => {
  const { showMenu } = useAppSelector(menuWizardData);

  return <WizardContainer showMenu={showMenu}>{children}</WizardContainer>;
};

export default NavbarWizard;
