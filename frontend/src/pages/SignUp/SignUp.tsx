import React, { FC } from 'react';
import { ContainerSignStyled, TitleSignStyled } from '../SignIn/styled';
import Registration from '../../features/Registration';

const SignUp: FC = () => {
  return (
    <ContainerSignStyled>
      <TitleSignStyled color="primary" variant="h2">
        Регистрация
      </TitleSignStyled>
      <Registration />
    </ContainerSignStyled>
  );
};

export default SignUp;
