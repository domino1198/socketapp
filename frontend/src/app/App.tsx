import { ReactQueryMiddleware } from './Midddlewares/reactQueryMiddleware';
import { NotistackMiddleware } from './Midddlewares/notistackMiddleware';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Context from '../shared/context';
import { useState } from 'react';
import { User } from '../shared/api/rest/controllers/data-contracts';

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();

  const setUser = (user?: User) => {
    setCurrentUser(user);
  };

  const logOut = () => {
    window.localStorage.removeItem('accessToken');
    navigate('/auth/sign-in');
    setCurrentUser(undefined);
  };

  return (
    <ReactQueryMiddleware>
      <NotistackMiddleware>
        <Context.AuthContext.Provider
          value={{ user: currentUser, setUser, logOut }}
        >
          {location.pathname === '/' && <Navigate to="/main" />}
          <Outlet />
        </Context.AuthContext.Provider>
      </NotistackMiddleware>
    </ReactQueryMiddleware>
  );
};
