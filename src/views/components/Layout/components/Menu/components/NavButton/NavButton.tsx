import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { useAppSelector } from '@src/app/hooks.store';
import { menuWizardData } from '@src/infrastructure/services/selectors/appTools/Menu';
import { useDispatch } from 'react-redux';
import { setShowMenu } from '@views/components/Layout/components/Menu/common/redux/Menu.slice';

interface iProps {
  className?: string | undefined;
}

const CustomIconButton = styled(IconButton)`
  transition: all .3s ease-in;
`;

const NavButton: React.FC<iProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { showMenu } = useAppSelector(menuWizardData);

  return (
    <div style={{width: '33.3%'}} className={className}>
      <CustomIconButton onClick={() => dispatch(setShowMenu())} edge="start">
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </CustomIconButton>
    </div>
  );
};

export default NavButton;
