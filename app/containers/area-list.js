import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectArea } from '../actions/index';
import { bindActionCreators } from 'redux';

class AreaList extends Component {
  renderList(){
    return this.props.areas.map((area) => {
      return (
        <li key={area.areaName}
          onClick={() => this.props.selectArea(area)}
          className="list-group-item">
          {area.areaName}
        </li>
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
  return {
    areas: state.areas
  }
}
//ANything returned from this function will end up as props on the area list container
function mapDispatchToProps(dispatch){
  //whenever selectArea is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectArea : selectArea }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);
