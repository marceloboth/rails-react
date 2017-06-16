import axios from 'axios';

export const FETCH_FIELDS = 'FETCH_FIELDS';
// export const FETCH_POST = 'FETCH_POST';
// export const CREATE_POST = 'CREATE_POST';
// export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://localhost:3000/api/v1';
// const API_KEY = '?key=89j9j99j9j99j';

export function fetchFields() {
  const request = axios.get(`${ROOT_URL}/fields`);

  return {
    type: FETCH_FIELDS,
    payload: request
  };
}

/*
export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
*/
