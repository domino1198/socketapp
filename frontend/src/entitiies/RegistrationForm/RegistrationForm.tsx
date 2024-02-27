import React, { BaseSyntheticEvent, FC, memo } from 'react';
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  GlobalError,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { CircularProgress, Grid } from '@mui/material';
import {
  ButtonFormAuthStyled,
  ContainerButtonStyled,
  FormAuthStyled,
} from '../AuthForm/styled';
import { Link } from 'react-router-dom';
import FormControl from '../../shared/ui/FormControl';
import { RegistrationUser } from '../../features/Registration/types';

interface Props {
  onSubmit: SubmitHandler<RegistrationUser>;
  control: Control<RegistrationUser, any>;
  isLoading: boolean;
  errors: Partial<FieldErrorsImpl<DeepRequired<RegistrationUser>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  handleSubmit: (
    onValid: SubmitHandler<RegistrationUser>,
    onInvalid?: SubmitErrorHandler<RegistrationUser>
  ) => (e?: BaseSyntheticEvent) => Promise<void>;
}

const RegistrationForm: FC<Props> = ({
  onSubmit,
  control,
  handleSubmit,
  errors,
  isLoading,
}) => {
  return (
    <FormAuthStyled onSubmit={handleSubmit(onSubmit)}>
      <Grid alignItems="center" container={true} rowSpacing={4}>
        <Grid item={true} xs={12}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <FormControl
                {...field}
                ref={undefined}
                error={!!errors.username}
                textError={errors.username?.message}
                placeholder="Введите логин"
                label="Логин"
              />
            )}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl
                {...field}
                ref={undefined}
                type="password"
                error={!!errors.password}
                textError={errors.password?.message}
                placeholder="Введите пароль"
                label="Пароль"
              />
            )}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormControl
                {...field}
                ref={undefined}
                error={!!errors.firstName}
                textError={errors.firstName?.message}
                placeholder="Введите имя"
                label="Имя"
              />
            )}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <FormControl
                {...field}
                ref={undefined}
                error={!!errors.lastName}
                textError={errors.lastName?.message}
                placeholder="Введите фамилию"
                label="Фамилия"
              />
            )}
          />
        </Grid>
        <ContainerButtonStyled container={true} item={true} columnSpacing={1}>
          <Grid item={true} xs={6}>
            <ButtonFormAuthStyled disabled={isLoading} type="submit">
              {isLoading ? (
                <CircularProgress size={24.5} />
              ) : (
                'Зарегестрироваться'
              )}
            </ButtonFormAuthStyled>
          </Grid>
          <Grid item={true} xs={6}>
            <Link to="/auth/sign-in">
              <ButtonFormAuthStyled variant="outlined">
                Вернуться к авторизации
              </ButtonFormAuthStyled>
            </Link>
          </Grid>
        </ContainerButtonStyled>
      </Grid>
    </FormAuthStyled>
  );
};

export default memo(RegistrationForm);
