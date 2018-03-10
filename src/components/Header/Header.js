import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Header extends Component {
  render() {
    return (
      <th onClick={ () => this.props.sortPosts(this.props.value) }>
        {this.props.label}
      </th>
    );
  }
}

export default connect(null, actions)(Header);
