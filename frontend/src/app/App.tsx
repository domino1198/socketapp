import { ReactQueryMiddleWare } from './reactQueryMiddleWare';
import { NotistackMiddleWare } from './notistackMiddleWare';
import { Outlet } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
