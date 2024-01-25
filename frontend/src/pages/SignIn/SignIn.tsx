import React, { FC } from 'react';
import Authorization from '../../features/Authorization';
import { ContainerSignStyled, TitleSignStyled } from './styled';

const SignIn: FC = () => {
  return (
    <ContainerSignStyled>
      <TitleSignStyled color="primary" variant="h2">
        Авторизация
      </TitleSignStyled>
      <Authorization />
    </ContainerSignStyled>
  );
};

export default SignIn;
