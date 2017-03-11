import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:  ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    this.setState({term: e.target.value})
  }
  onFormSubmit(e) {
    e.preventDefault;
  }
  render() {
    return (
      <form onSubmt={this.onFormSubmit} className="input-group">
        <input
         placeholder="Search Climbing Areas"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
        />
      </form>
    )
  }
}
