import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './Header.scss';

export class Header extends Component {
  renderArrow() {
    if (this.props.posts.sortedBy === this.props.value) {
      return (
        <span className="arrow">
          <figure className={this.props.posts.direction === 'desc' ? 'desc' : 'asc'}>
            &#9662;
          </figure>
        </span>
      );
    } else {
      return (
        <span className="arrow">
          <figure className="hidden">
            &#9662;
          </figure>
        </span>
      )
    }
  }


  render() {
    return (
      <th onClick={ () => this.props.sortPosts(this.props.value) } className={this.props.value}>
        <span
          className={this.props.posts.sortedBy === this.props.value ? 'active' : null}
        >
        {this.props.label} {this.renderArrow()}
        </span>
      </th>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, actions)(Header);
