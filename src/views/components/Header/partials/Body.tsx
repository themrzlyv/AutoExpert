import HeaderNav from '@src/views/components/Header/blocks/HeaderNav';
import MainLogo from '@src/views/components/Header/blocks/MainLogo';
import React from 'react';
import { Row } from 'react-bootstrap';

const Body: React.FC = () => {
  return (
    <>
      <Row>
        <MainLogo />
        <HeaderNav />
      </Row>
    </>
  );
};

export default Body;
