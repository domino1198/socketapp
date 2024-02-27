import React, { FC, ReactNode } from 'react';
import Container from '@mui/material/Container';


interface Props {
  children: ReactNode;
  header?:ReactNode
}

const Layout: FC<Props> = ({ children,header }) => {
  return (
    <>
      {header}
      <Container
        maxWidth="xl"
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBlock: 32,
        }}
      >
        {children}
      </Container>
    </>
  );
};


export default Layout