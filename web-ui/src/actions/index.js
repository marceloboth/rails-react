import JsonApi from 'devour-client';

export const FETCH_FIELDS = 'FETCH_FIELDS';
export const FETCH_FIELD  = 'FETCH_FIELD';
export const CREATE_FIELD = 'CREATE_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';

const ROOT_URL = 'http://localhost:3000/api/v1';
const jsonApi = new JsonApi({apiUrl: ROOT_URL});

jsonApi.define('field', {
  name: '',
  image: '',
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
  const request = jsonApi.create('field', { name: props.name, image: props.image })
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

export function deleteField(id, callback) {
  return {
    type: DELETE_FIELD,
    payload: jsonApi.destroy('field', id).then(() => callback())
  };
}
