import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CP } from './context/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CP>
    <App />
    </CP>
      
  </React.StrictMode>
);

