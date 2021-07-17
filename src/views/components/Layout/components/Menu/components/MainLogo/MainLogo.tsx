import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as RacingIcon } from '@assets/svg/racing.svg';
import { Typography } from '@material-ui/core';
import { useAppSelector } from '@src/app/hooks.store';
import { menuWizardData } from '@infrastructure/services/selectors/appTools/Menu';
import { partOfLogo } from '@infrastructure/data/constants';

interface iProps {
  showSearch: boolean;
  showMenu: boolean;
}

const LogoContainer = styled.div<iProps>`
  @media (max-width: 1100px) {
    h4 {
      font-size: 1.7em;
    }
    svg {
      display: none;
    }
  }
  @media (max-width: 930px) {
    h4 {
      display: ${({ showSearch, showMenu }) => (showSearch || showMenu ? 'none' : 'block')};
      font-size: 1.5em;
    }
  }
`;

const MainLogo: React.FC = () => {
  const { showMenu, showSearch } = useAppSelector(menuWizardData);
  return (
    <LogoContainer showSearch={showSearch} showMenu={showMenu}>
      <NavLink to="/" className="d-flex align-items-center justify-content-center">
        <RacingIcon width="3em" height="3em" className="my-1 me-2 p-0" />
        <Typography variant="h4" className="fw-bolder t-red">
          {partOfLogo.AUTO}
        </Typography>
        <Typography variant="h4" className=" t-blue">
          {partOfLogo.EXPERT}
        </Typography>
      </NavLink>
    </LogoContainer>
  );
};

export default MainLogo;
