import React from 'react';
import ReactDOM from 'react-dom';
import { PageStyles } from './PageStyles';

import './globalStyles.css';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <PageStyles>
      <Router />
    </PageStyles>
  </React.StrictMode>,
  document.querySelector('#root')
);
