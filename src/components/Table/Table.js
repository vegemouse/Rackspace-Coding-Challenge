import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Post from '../Post/Post';

class Table extends Component {

  renderPosts() {
    if (this.props.posts.posts.length > 0) {
      return this.props.posts.posts.map(post => {
        return <Post post={post} key={post.id} />
      });
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={ () => this.props.sortPosts('id') }>ID</th>
            <th onClick={ () => this.props.sortPosts('userId') }>User ID</th>
            <th onClick={ () => this.props.sortPosts('title') }>Title</th>
            <th onClick={ () => this.props.sortPosts('body') }>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPosts()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, actions)(Table);
