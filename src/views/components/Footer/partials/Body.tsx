import ByCreated from '@src/views/components/Footer/blocks/ByCreated';
import FooterLogo from '@src/views/components/Footer/blocks/FooterLogo';
import FooterMenu from '@src/views/components/Footer/blocks/FooterMenu';
import SocialNav from '@src/views/components/Footer/blocks/SocialNav';
import React from 'react';
import { Container } from 'react-bootstrap';

const Body: React.FC = () => {
  return (
    <Container fluid className="bg-footer-blue">
      <FooterLogo />
      <SocialNav />
      <FooterMenu />
      <ByCreated />
    </Container>
  );
};

export default Body;
