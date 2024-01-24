import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
