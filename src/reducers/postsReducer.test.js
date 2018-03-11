import reducer from './postsReducer';

describe('Posts reducer', () => {

  const initialState = {
    posts: [],
    sortedBy: null,
    direction: null
  };

  const sortPosts = {
    type: 'SORT_POSTS',
    key: 'id'
  }

  const mockPosts = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
  ]

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should update posts on FETCH_POSTS', () => {
    let fetchPosts = {
      type: 'FETCH_POSTS',
      payload: mockPosts
    }
    expect(reducer(initialState, fetchPosts).posts).toEqual(mockPosts);
  });

  it ('should order posts in ascending order', () => {
    const postsState = {
      posts: mockPosts,
      sortedBy: null,
      direction: null
    }

    expect(reducer(postsState, sortPosts).posts[0].id).toEqual(1);
    expect(reducer(postsState, sortPosts).posts[3].id).toEqual(4);
  });

  it ('should order posts in descending order if selected key is already sorted in ascending order', () => {
    const clickedPostsState = {
      posts: mockPosts,
      sortedBy: 'id',
      direction: 'asc'
    }

    expect(reducer(clickedPostsState, sortPosts).posts[0].id).toEqual(4);
    expect(reducer(clickedPostsState, sortPosts).posts[3].id).toEqual(1);
  });


})
