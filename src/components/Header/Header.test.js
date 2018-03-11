import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {

  const mockSortPosts = jest.fn();
  let wrapper;

  const props = {
    sortPosts: mockSortPosts,
    value: 'test',
    label: 'test',
    posts: {
      sortedBy: 'test',
      direction: 'asc'
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  test('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should call sortPosts on click', () => {
    wrapper.find('th').simulate('click');
    expect(mockSortPosts).toHaveBeenCalled();
  });


});
