import JsonApi from 'devour-client';

export const FETCH_FIELDS = 'FETCH_FIELDS';
export const FETCH_FIELD  = 'FETCH_FIELD';
export const CREATE_FIELD = 'CREATE_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const SEARCH_FIELDS = 'SEARCH_FIELDS';

const ROOT_URL = 'http://127.0.0.1:3000/api/v1';
const jsonApi = new JsonApi({apiUrl: ROOT_URL});

jsonApi.define('field', {
  name: '',
  image: '',
  description: '',
  address: '',
  createdAt: '',
  updatedAt: ''
});

export function fetchFields() {
  return {
    type: FETCH_FIELDS,
    payload: jsonApi.findAll('field')
  };
}

export function createField(props, callback) {
  const { name, image, description, address } = props;
  const request = jsonApi.create('field', { name, image, description, address })
    .then(() => callback());

  return {
    type: CREATE_FIELD,
    payload: request
  };
}

export function fetchField(id) {
  return {
    type: FETCH_FIELD,
    payload: jsonApi.find('field', id)
  };
}

export function searchFields(term) {
  return {
    type: SEARCH_FIELDS,
    payload: jsonApi.findAll('field', { filter: { search: term }})
  };
}

export function deleteField(id, callback) {
  return {
    type: DELETE_FIELD,
    payload: jsonApi.destroy('field', id).then(() => callback())
  };
}
