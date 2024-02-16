import { ReactQueryMiddleware } from './midddlewares/reactQueryMiddleware';
import { NotistackMiddleware } from './midddlewares/notistackMiddleware';
import { Navigate, Outlet } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <ReactQueryMiddleware>
      <NotistackMiddleware>
        <Navigate to="/main" />
        <Outlet />
      </NotistackMiddleware>
    </ReactQueryMiddleware>
  );
};
