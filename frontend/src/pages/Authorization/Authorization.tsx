import React, { FC } from 'react';
import SignIn from '../../features/SignIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Authorization: FC = () => {
  return (
    <Container
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
        justifyContent: 'center',
      }}
    >
      <Typography color="primary" style={{ fontWeight: 500 }} variant="h2">
        Авторизация
      </Typography>
      <SignIn />
    </Container>
  );
};

export default Authorization;
