import React, { FC, memo, ReactNode, useContext, useMemo } from 'react';
import { ItemMenu } from '../../shared/ui/Menu/types';
import Layout from '../../shared/ui/Layout';
import Header from '../../shared/ui/Header';
import UserMenu from './components/UserMenu';
import context from '../../shared/context';

interface Props {
  isAuth?: boolean;
  children: ReactNode;
}

const Page: FC<Props> = ({ children, isAuth = false }) => {
  const authContext = useContext(context.AuthContext);

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
          authContext?.logOut();
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
    link: '/main/chats',
  },
  {
    title: 'Блог',
    id: '2',
    link: '/main/blog',
  },
];

export default memo(Page);
