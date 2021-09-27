import React from 'react';
import ReactDOM from 'react-dom';
import { PageStyles } from './PageStyles';

import './styles/globalStyles.css';
import Router from './Router';
import { ThemeContextProvider } from './hooks/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
