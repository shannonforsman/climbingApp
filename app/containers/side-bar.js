import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideBar extends Component {
  render() {
    return(
      <div>
        <Link to="/areas/new" className="button button-primary">Add area</Link>
        Sidebar
      </div>
    )
  }
}
