import React from 'react';
import MainPages from '@views/MainPages';
import Layout from '@src/views/components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <MainPages />
    </Layout>
  );
};

export default App;
