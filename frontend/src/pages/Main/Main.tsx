import React from 'react';
import Chat from '../../widgets/Chat';
import Page from '../../widgets/Page';

const Main = () => {
  return (
    <Page isAuth={true}>
      <Chat />
    </Page>
  );
};

export default Main;
