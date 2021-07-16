import React from 'react';

import Header from '@views/components/Header';
import Menu from '@views/components/Menu';
import Footer from '@views/components/Footer';

interface iLayout {
  children: JSX.Element & React.ReactNode;
}

const Layout: React.FC<iLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
