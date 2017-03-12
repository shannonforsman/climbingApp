import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActiveArea } from '../data/area-active/action_fetchAreaActive';
import { bindActionCreators } from 'redux';


class AreaActive extends Component {
  componentWillMount() {
    this.props.fetchActiveArea(this.props.params.id);
  }

  render() {
    console.log('props', this.props)
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  console.log('stateactive', state)
  return {
    areaActive : state.activeArea
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchActiveArea }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaActive);
