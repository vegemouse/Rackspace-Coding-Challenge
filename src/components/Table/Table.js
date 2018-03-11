import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Header from '../Header/Header';
import Post from '../Post/Post';
import './Table.scss';

class Table extends Component {
  renderPosts() {
    if (this.props.posts.posts.length > 0) {
      return this.props.posts.posts.map(post => {
        return <Post post={post} key={post.id} />
      });
    } else {
      return (
        <tr>
          <td className="loading">
            <h1>Loading Posts</h1>
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <Header value="id" label="ID" />
              <Header value="userId" label="User" />
              <Header value="title" label="Title" />
              <Header value="body" label="Body" />
            </tr>
          </thead>
          <tbody>
            {this.renderPosts()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, actions)(Table);
