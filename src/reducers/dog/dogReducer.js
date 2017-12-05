import { FETCH_DOG_SUCCESS } from '../../constants/actionTypes';

export const initialState = {
  url: '',
};

export default function dogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOG_SUCCESS: {
      return {
        ...state,
        url: action.payload.url,
      }
    }
    default:
      return state;
  }
}
