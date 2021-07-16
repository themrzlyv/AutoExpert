import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';

import { menuItemValues } from '@src/views/components/Menu/common/data';
import CustomInput from '@src/components/CustomInput';
import NavLink from '@src/views/components/Menu/components/NavLink';
import NavMenu from '@src/views/components/Menu/components/NavMenu';
import NavButton from '@src/views/components/Menu/components/NavButton';

const Body: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Container fluid className="shadow-1 bg-dark-blue position-static">
      <Row>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="position-relative d-flex align-items-center justify-content-between"
        >
          <IconButton onClick={() => setShowMenu(!showMenu)} edge="start">
            <NavButton showMenu={showMenu} />
          </IconButton>

          <NavMenu showMenu={showMenu}>
            {menuItemValues.map((item) => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </NavMenu>

          <CustomInput pre="search" />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
