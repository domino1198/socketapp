import React, { FC, ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

interface Props {
  children: ReactNode;
}

export const NotistackMiddleWare: FC<Props> = ({ children }) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};
