import React, { FC, ReactNode } from 'react';
import { ItemMenu } from '../../shared/ui/Menu/types';
import Layout from '../../shared/ui/Layout';
import Header from '../../shared/ui/Header';
import UserMenu from '../../entitiies/UserMenu';

interface Props {
  isAuth?: boolean;
  children: ReactNode;
}

const Page: FC<Props> = ({ children, isAuth = false }) => {

  return (
    <Layout header={isAuth ? <Header leftItems={leftItems} rightItems={<UserMenu items={settings} />} /> : undefined}>
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

const settings: ItemMenu[] = [
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
      return;
    },
  },
];

export default Page;