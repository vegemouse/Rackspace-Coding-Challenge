import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios';

import * as actions from './actions';
import mockPosts from './test-utils/mockdata.json';

const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates FETCH_POSTS with posts after API call is done', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockPosts,
      });
    });

    const expectedActions = [
      { type: 'FETCH_POSTS', payload: mockPosts },
    ];

    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
