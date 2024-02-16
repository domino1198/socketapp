import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../../pages/Main';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import { App } from '../App';
import PrivateRoute from '../../widgets/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/main',
        element: (
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        ),
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
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
