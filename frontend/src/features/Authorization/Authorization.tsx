import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '../../entitiies/AuthForm';
import { IFormInput } from './types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Authorization: FC = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: IFormInput) => {
      return axios.post('/api/users/login', data);
    },
    onSuccess: ({ data }) => {
      localStorage.setItem('accessToken',data.accessToken);
    },
    onError: (error: any) => {
      setError('username', {
        type: 'invalid token',
        message: '',
      });

      setError('password', {
        type: 'invalid token',
        message:
          error.response.status === 403
            ? 'Пользователь с таким логином не найден'
            : 'Неверный логин или пароль',
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    login(data);
  };

  return (
    <AuthForm
      isLoading={isPending}
      errors={errors}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default Authorization;
