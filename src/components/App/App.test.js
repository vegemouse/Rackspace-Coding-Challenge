import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App', () => {

  const mockFetchPosts = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App fetchPosts={mockFetchPosts}/>);
  });

  test('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should call fetchPosts', () => {
    expect(mockFetchPosts).toHaveBeenCalled();
  });
});
