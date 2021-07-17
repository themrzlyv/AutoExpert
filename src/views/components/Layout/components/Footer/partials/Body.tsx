import React from 'react';
import { Container } from 'react-bootstrap';
import FooterLogo from '@views/components/Layout/components/Footer/blocks/FooterLogo';
import SocialNav from '@views/components/Layout/components/Footer/blocks/SocialNav';
import FooterMenu from '@views/components/Layout/components/Footer/blocks/FooterMenu';
import ByCreated from '@views/components/Layout/components/Footer/blocks/ByCreated';

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
