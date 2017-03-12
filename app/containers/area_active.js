import React, { Component } from 'react';
import { connect } from 'react-redux';

class AreaActive extends Component {
  render() {
    if (!this.props.area) {
      return <div>Select a book</div>
    }
    return(
      <div>
        <h3>Detail for:</h3>
        <div>{this.props.area.areaName}</div>
        <div>{this.props.params.id}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    areaActive : state.activeArea
  }
}

export default connect(mapStateToProps)(AreaActive);
