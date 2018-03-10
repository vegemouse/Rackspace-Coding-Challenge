import React from 'react';

export default ({post}) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.userId}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
}
