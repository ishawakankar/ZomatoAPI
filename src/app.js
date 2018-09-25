/*global document: true*/
/*eslint no-undef: "error"*/

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
);