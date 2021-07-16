import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

interface Iprops {
  showMenu?: boolean | undefined;
}

const OpenMenuBtn = styled(MenuIcon)<Iprops>`
  display: none;
  color: #fff;
  @media screen and (max-width: 1200px) {
    display: block;
    margin: 0.6em 0.4em;
    cursor: pointer;
  }
`;

const CloseMenuBtn = styled(CloseIcon)<Iprops>`
  display: none;
  color: #fff;
  @media screen and (max-width: 1200px) {
    display: block;
    margin: 0.6em 0.4em;
    cursor: pointer;
  }
`;

const NavButton: React.FC<Iprops> = ({ showMenu }) => {
  return showMenu ? <CloseMenuBtn /> : <OpenMenuBtn />;
};

export default NavButton;
