import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SideBar from './containers/side-bar';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SideBar} />
    
  </Route>
)
