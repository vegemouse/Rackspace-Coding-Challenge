import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';

describe('Post', () => {

  const post = {
    id: 1,
    userId: 1,
    title: 'test',
    body: 'test'
  }

  it('should render a tr with four tds', () => {
    const wrapper = shallow(<Post post={post} />);

    expect(wrapper.find('tr').length).toEqual(1);
    expect(wrapper.find('td').length).toEqual(4);
  })

});
