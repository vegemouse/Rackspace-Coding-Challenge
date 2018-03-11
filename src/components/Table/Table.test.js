import React from 'react';
import { shallow } from 'enzyme';

import { Table } from './Table';
import Post from '../Post/Post';
import Header from '../Header/Header';

describe('Table', () => {
  const posts = {
    posts: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Table posts={posts} />);
  });

  it('should render a Post component for each post', () => {
    expect(wrapper.find(Post).length).toEqual(4);
  });

  it('should render four Header components', () => {
    expect(wrapper.find(Header).length).toEqual(4);
  });
});
