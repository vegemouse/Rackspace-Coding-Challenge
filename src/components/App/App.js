import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Table from '../Table/Table';
import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="app">
        <Table />
        <span className="credit">Created by Maxwell Cady for Rackspace</span>
      </div>
    )
  }
}

export default connect(null, actions)(App);
