import React from 'react';

import { menuItemValues } from '@views/components/Layout/components/Menu/common/constants';

import Navbar from '@views/components/Layout/components/Menu/components/Navbar';
import NavbarNav from '@views/components/Layout/components/Menu/components/NavbarNav';
import NavMenu from '@views/components/Layout/components/Menu/components/NavMenu';
import NavButton from '@views/components/Layout/components/Menu/components/NavButton';
import MainLogo from '@views/components/Layout/components/Menu/components/MainLogo';
import NavbarWizard from '@views/components/Layout/components/Menu/components/NavbarWizard';
import NavLink from '@views/components/Layout/components/Menu/components/NavLink';
import NavTools from '@views/components/Layout/components/Menu/components/NavTools';
import SearchBox from '@views/components/Layout/components/Menu/components/NavTools/components/SearchBox';

import IconButton from '@material-ui/core/IconButton';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Body: React.FC = () => {
  return (
    <>
      <Navbar>
        <NavbarNav xl={12} lg={12} md={12} xs={12}>
          <NavMenu>
            <NavButton />

            <MainLogo />

            <NavbarWizard>
              {menuItemValues.map((item) => (
                <NavLink key={item.title} to={item.link}>
                  {item.title}
                </NavLink>
              ))}
            </NavbarWizard>

            <NavTools>
              <SearchBox />
              <IconButton edge="start" className="ms-1">
                <PermIdentityIcon />
              </IconButton>
            </NavTools>
          </NavMenu>
        </NavbarNav>
      </Navbar>
    </>
  );
};

export default Body;
