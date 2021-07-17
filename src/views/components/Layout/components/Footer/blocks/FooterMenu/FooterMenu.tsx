import { Typography } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { footerMenuData } from '@views/components/Layout/components/Footer/common/constants';

const CustomTypography = styled(Typography)`
  color: #eaeaead0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
    transition: color 0.3s ease-in-out;
  }
`;

const FooterMenu: React.FC = () => {
  return (
    <Row>
      <Col
        xl={6}
        lg={8}
        md={10}
        sm={12}
        xs={12}
        className="d-flex mb-2 mx-auto align-items-center justify-content-around"
      >
        {footerMenuData.map((item) => (
          <NavLink to={item.link} key={item.id}>
            <CustomTypography variant="button">{item.title}</CustomTypography>
          </NavLink>
        ))}
      </Col>
    </Row>
  );
};

export default FooterMenu;
