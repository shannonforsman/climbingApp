import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAreaList } from '../data/area-list/action_fetchAreaList';
import { Link } from 'react-router';


class AreaList extends Component {
  componentWillMount() {
    console.log(this.props.fetchAreaList())
  }
  render() {
    return (
      <div>
        <Link to="/areas/new" className="button button-primary">Add area</Link>
        <ul className="list-group col-sm-4">
          <div>Area List</div>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAreaList }, dispatch);
}

export default connect(null, mapDispatchToProps)(AreaList);
