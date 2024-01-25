import { ReactQueryMiddleWare } from './reactQueryMiddleWare';
import { NotistackMiddleWare } from './notistackMiddleWare';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <ReactQueryMiddleWare>
      <NotistackMiddleWare>
        {/*<Navigate to="/main" />*/}
        <Outlet />
      </NotistackMiddleWare>
    </ReactQueryMiddleWare>
  );
};
