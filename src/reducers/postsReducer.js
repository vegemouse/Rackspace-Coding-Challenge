const initialState = {
  posts: [],
  sortedBy: null,
  direction: null
}

export default function(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_POSTS':
      return {...state, posts: action.payload};

    case 'SORT_POSTS':
      let postsCopy = state.posts;
      let { key } = action;

      // This checks if the heading has already been clicked. If it has, it will sort in descending order instead of ascending.
      if (state.sortedBy === key && state.direction === 'asc') {
        postsCopy.sort((a,b) => {
          if (a[key] > b[key]) return -1;
          if (a[key] < b[key]) return 1;
        });
        return {
          ...state,
          posts: postsCopy,
          direction: 'desc'
        };
      } else {
        postsCopy.sort((a,b) => {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
        });
        return {
          ...state,
          posts: postsCopy,
          sortedBy: key,
          direction: 'asc'
        };
      }

    default:
      return state;
  }
}
