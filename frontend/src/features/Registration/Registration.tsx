import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegistrationUser } from './types';
import RegistrationForm from '../../entitiies/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { SignUpRequest } from '../../shared/api/rest/controllers/data-contracts';
import api from '../../shared/api';

const {
  services: { userService },
} = api;

const Registration: FC = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    criteriaMode: 'all',
    resolver: async (data) => {
      return {
        values: data,
        errors: Object.keys(data).reduce((previous, key) => {
          if (key === 'username' && data.username.length <= 5) {
            return {
              ...previous,
              username: {
                type: 'minLength',
                message: 'Длина логина должны быть минимум 5 символов',
              },
            };
          }

          if (key === 'password' && data.password.length <= 6) {
            return {
              ...previous,
              password: {
                type: 'minLength',
                message: 'Длина пароля должна быть минимум 6 символов',
              },
            };
          }

          if (
            (key === 'firstName' || key === 'lastName') &&
            data.password.length === 0
          ) {
            return {
              ...previous,
              [key]: {
                type: 'minLength',
                message:
                  key === 'firstName'
                    ? 'Имя не должно быть пустым'
                    : 'Фамилия не должна быть пустой',
              },
            };
          }

          return previous;
        }, {}),
      };
    },
  });

  const { enqueueSnackbar } = useSnackbar();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: (data: SignUpRequest) => {
      return userService(false).createUser(data);
    },
    onSuccess: (data) => {
      enqueueSnackbar(
        `Пользователь ${data.username} успешно зарегестрирован!`,
        { variant: 'success' }
      );
      navigate('/auth/sign-in');
    },
    onError: () => {
      setError('username', {
        type: 'already exist',
        message: 'Пользователь с таким логином уже существует',
      });
    },
  });

  const onSubmit: SubmitHandler<RegistrationUser> = (data) => {
    signUp(data);
  };

  return (
    <>
      <RegistrationForm
        isLoading={isPending}
        errors={errors}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Registration;
