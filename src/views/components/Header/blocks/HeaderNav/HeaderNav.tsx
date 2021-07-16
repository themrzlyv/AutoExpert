import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Body from './partials/Body';

const HeaderNav:React.FC = () => {
  return (
    <Col xl={8} lg={8} md={8} sm={12} xs={12}  className="d-flex align-items-end">
      <Container>
        <Body />
      </Container>
    </Col>
  );
};

export default HeaderNav;
