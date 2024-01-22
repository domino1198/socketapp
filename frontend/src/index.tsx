import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import Main from '../src/pages/Main/Main';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);
