'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import MainView from './components/MainView';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
  	<IndexRoute component={MainView}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
