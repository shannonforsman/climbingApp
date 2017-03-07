import React, { Component } from 'react';
import AreaList from '../containers/area-list';
import ActiveArea from '../containers/active-area';

export default class App extends Component {
  render() {
    return (
      <div>
        <AreaList />
        <ActiveArea /> 
      </div>
    );
  }
}
