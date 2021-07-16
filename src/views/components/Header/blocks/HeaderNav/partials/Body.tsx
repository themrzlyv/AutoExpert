import HeaderNavigation from '@src/views/components/Header/blocks/HeaderNav/blocks/HeaderNavigation';
import SocialLinks from '@src/views/components/Header/blocks/HeaderNav/blocks/SocialLinks';
import React from 'react';
import { Row } from 'react-bootstrap';

const Body: React.FC = () => {
  return (
    <Row className="align-items-center justify-content-end">
      <SocialLinks />
      <HeaderNavigation />
    </Row>
  );
};

export default Body;
