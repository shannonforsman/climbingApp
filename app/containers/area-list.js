import React, { Component } from 'react';
import { connect } from 'react-redux';


class AreaList extends Component {
  renderList(){
    return this.props.areas.map((area) => {
      return (
        <li key={area.areaName} className="list-group-item">{area.areaName}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">

        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    areas: state.areas
  }
}

export default connect(mapStateToProps)(AreaList);
