import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Adlibs from './components/adlibs';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    <Route path="/adlibs" component={Adlibs}/>
  </Route>
)
