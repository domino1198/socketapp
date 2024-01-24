import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Chat from '../../widgets/Chat';
import Layout from '../../widgets/Layout';

const Main = () => {
  return (
    <Layout>
      <Chat />
    </Layout>
  );
};

export default Main;
