import React, { Component } from 'react';
import AreaList from '../containers/area_list';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <AreaList />
      </div>
    );
  }
}
