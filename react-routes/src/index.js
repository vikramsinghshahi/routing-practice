import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Router } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/user/:username" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
