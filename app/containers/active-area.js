import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveArea extends Component {
  render() {
    console.log('this', this.props)
    if (!this.props.area) {
      return <div>Select a book</div>
    }
    return(
      <div>
        <h3>Detail for:</h3>
        <div>{this.props.area.areaName}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    area : state.activeArea
  }
}

export default connect(mapStateToProps)(ActiveArea);
