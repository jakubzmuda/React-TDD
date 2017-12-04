import axios from 'axios';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_FAILURE } from '../constants/actionTypes';

function fetchDogRequest() {
  return {
    type: FETCH_DOG_REQUEST,
  };
}

function fetchDogSuccess(body) {
  return {
    type: FETCH_DOG_SUCCESS,
    payload: {
      dogUrl: body.message,
    },
  };
}

function fetchDogFailure(ex) {
  return {
    type: FETCH_DOG_FAILURE,
    ex,
  };
}

export default function fetchDog() {
  return (dispatch) => {
    dispatch(fetchDogRequest());
    return axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => response.data)
      .then(data => dispatch(fetchDogSuccess(data)))
      .catch(ex => dispatch(fetchDogFailure(ex)));
  };
}
