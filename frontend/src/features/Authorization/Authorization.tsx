import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '../../entitiies/AuthForm';
import { IFormInput } from './types';

const Authorization: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthForm
      errors={errors}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default Authorization;
