import React, { FC, ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../shared/api';
import { CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';

const {
  services: { authService },
} = api;

interface Props {
  children: ReactElement;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const hasAccessToken = !!window.localStorage.getItem('accessToken');

  const { isLoading, isError } = useQuery({
    queryFn: () => {
      return authService(true).loginUser();
    },
    enabled: hasAccessToken,
    queryKey: ['accessUser'],
  });

  if (isError || !hasAccessToken) return <Navigate to="/auth/sign-in" />;

  if (isLoading) return <CircularProgress />;

  return children;
};

export default PrivateRoute;
