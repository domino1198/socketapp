import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import { App } from '../App';
import PrivateRoute from '../../widgets/PrivateRoute';
import Chats from '../../pages/Chats';
import Main from '../../pages/Main';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/main" />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/main',
        element: (
          <PrivateRoute>
            <Outlet />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/main',
            element: <Main />,
          },
          {
            path: '/main/chats',
            element: <Chats />,
          },
        ],
      },
      {
        path: '/auth',
        element: <Navigate to="/auth/sign-in" />,
      },
      {
        path: '/auth/sign-in',
        element: <SignIn />,
      },
      {
        path: '/auth/sign-up',
        element: <SignUp />,
      },
    ],
  },
]);
