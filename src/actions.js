import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch({ type: 'FETCH_POSTS', payload: res.data });
    });
};

export const sortPosts = (key, direction) => dispatch => {
  dispatch({ type: 'SORT_POSTS', key, direction });
}
