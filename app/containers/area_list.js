import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAreaList } from '../data/area-list/action_fetchAreaList';
import { Link } from 'react-router';


class AreaList extends Component {
  constructor(props) {
    super(props);

    this.renderAreaList = this.renderAreaList.bind(this);
  }
  componentWillMount() {
    this.props.fetchAreaList();
  }
  renderAreaList() {
    console.log('arealist', this.props.areaList)
    return this.props.areaList.map((area) =>  {
      return <li key={area._id} >{area.properties.name}</li>
    });
  }
  render() {
    return (
      <div>
        <Link to="/areas/new" className="button button-primary">Add area</Link>
        <ul className="list-group col-sm-4">
          <ul>{this.renderAreaList()}</ul>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { areaList : state.areaList.all }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAreaList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);
