import React, { FC, ReactNode, useMemo } from 'react';
import { ItemMenu } from '../../shared/ui/Menu/types';
import Layout from '../../shared/ui/Layout';
import Header from '../../shared/ui/Header';
import UserMenu from '../../entitiies/UserMenu';
import { useNavigate } from 'react-router-dom';

interface Props {
  isAuth?: boolean;
  children: ReactNode;
}

const Page: FC<Props> = ({ children, isAuth = false }) => {
  const navigate = useNavigate();

  const settings: ItemMenu[] = useMemo(
    () => [
      {
        title: 'Профиль',
        id: '1',
        action: () => {
          return;
        },
      },
      {
        title: 'Аккаунт',
        id: '2',
        action: () => {
          return;
        },
      },
      {
        title: 'Выйти',
        id: '3',
        action: () => {
          window.localStorage.removeItem('accessToken');
          navigate('/auth/sign-in');

          return;
        },
      },
    ],
    []
  );

  return (
    <Layout
      header={
        isAuth ? (
          <Header
            leftItems={leftItems}
            rightItems={<UserMenu items={settings} />}
          />
        ) : undefined
      }
    >
      {children}
    </Layout>
  );
};

const leftItems: ItemMenu[] = [
  {
    title: 'Чаты',
    id: '1',
    action: () => {
      return;
    },
  },
  {
    title: 'Блог',
    id: '2',
    action: () => {
      return;
    },
  },
];

export default Page;
