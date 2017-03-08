import React, { Component } from 'react';
import AreaList from '../containers/area-list';
import ActiveArea from '../containers/active-area';
import SearchBar from '../containers/search-bar';

export default class App extends Component {

  render() {
    return (
      <div>
        <AreaList />
        <ActiveArea />
        <SearchBar />
      </div>
    );
  }
}
