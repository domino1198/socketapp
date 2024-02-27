import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../shared/api';
import { CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ContainerSpinnerStyled } from './styled';
import Page from '../../entitiies/Page';
import context from '../../shared/context';

const {
  services: { authService },
} = api;

interface Props {
  children: ReactElement;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const hasAccessToken = !!window.localStorage.getItem('accessToken');
  const authContext = useContext(context.AuthContext);

  const { isLoading, isError, data } = useQuery({
    queryFn: () => {
      return authService(true).loginUser();
    },
    retry: false,
    enabled: hasAccessToken,
    queryKey: ['accessUser'],
  });

  useEffect(() => {
    data?.user && authContext?.setUser(data.user);
  }, [data]);

  if (isError || !hasAccessToken) return <Navigate to="/auth/sign-in" />;

  if (isLoading)
    return (
      <ContainerSpinnerStyled>
        <CircularProgress />
      </ContainerSpinnerStyled>
    );

  return <Page isAuth={true}>{children}</Page>;
};

export default PrivateRoute;
