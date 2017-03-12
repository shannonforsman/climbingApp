import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SideBar from './containers/side-bar';
import AreaNew from './containers/area_new';
import AreaActive from './containers/area_active';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SideBar} />
    <Route path="areas/new" component={AreaNew} />
    <Route path="areas/:id" component={AreaActive} />
  </Route>
)
