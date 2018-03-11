import React from 'react';
import './Post.scss';

export default ({post}) => {
  return (
    <tr className="post">
      <td className="post-id"><span>{post.id}</span></td>
      <td className="post-user-id"><span>{post.userId}</span></td>
      <td className="post-title"><span>{post.title}</span></td>
      <td className="post-body"><span>{post.body}</span></td>
    </tr>
  );
}
