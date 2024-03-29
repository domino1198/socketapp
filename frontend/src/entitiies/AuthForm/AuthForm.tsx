import React, { BaseSyntheticEvent, FC, memo } from 'react';
import {
  ButtonFormAuthStyled,
  ContainerButtonStyled,
  FormAuthStyled,
} from './styled';
import { CircularProgress, Grid } from '@mui/material';
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  GlobalError,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import FormControl from '../../shared/ui/FormControl';
import { Link } from 'react-router-dom';
import { IFormInput } from '../../features/Authorization/types';

interface Props {
  onSubmit: SubmitHandler<IFormInput>;
  control: Control<IFormInput, any>;
  isLoading: boolean;
  errors: Partial<FieldErrorsImpl<DeepRequired<IFormInput>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  handleSubmit: (
    onValid: SubmitHandler<IFormInput>,
    onInvalid?: SubmitErrorHandler<IFormInput>
  ) => (e?: BaseSyntheticEvent) => Promise<void>;
}

const AuthForm: FC<Props> = ({
  onSubmit,
  control,
  isLoading,
  handleSubmit,
  errors,
}) => {
  return (
    <FormAuthStyled autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <Grid alignItems="center" container={true} rowSpacing={4}>
        <Grid item={true} xs={12}>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Логин не должен быть пустым' }}
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
            rules={{ required: 'Пароль не должен быть пустым' }}
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
        <ContainerButtonStyled container={true} item={true} columnSpacing={1}>
          <Grid item={true} xs={6}>
            <ButtonFormAuthStyled type="submit">
              {isLoading ? <CircularProgress size={24.5} /> : 'Авторизоваться'}
            </ButtonFormAuthStyled>
          </Grid>
          <Grid item={true} xs={6}>
            <Link to="/auth/sign-up">
              <ButtonFormAuthStyled variant="outlined">
                Зарегестрироваться
              </ButtonFormAuthStyled>
            </Link>
          </Grid>
        </ContainerButtonStyled>
      </Grid>
    </FormAuthStyled>
  );
};

export default memo(AuthForm);
