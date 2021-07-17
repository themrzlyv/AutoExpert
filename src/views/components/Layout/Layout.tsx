import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Menu from '@views/components/Layout/components/Menu';
import Footer from '@views/components/Layout/components/Footer';

interface iLayout {
  children: JSX.Element & React.ReactNode;
}

const Layout: React.FC<iLayout> = ({ children }) => {
  return (
    <Container fluid>
      <Menu />
      <Row>
        <Col style={{marginTop: '5em'}} xs={12}>{children}</Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
