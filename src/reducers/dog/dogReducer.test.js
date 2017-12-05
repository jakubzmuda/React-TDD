import dogReducer from './dogReducer';
import { FETCH_DOG_SUCCESS } from '../../constants/actionTypes';

describe('dog reducer', () => {

  it('returns initial state', () => {
    expect(dogReducer(undefined, {})).toEqual({url: ''});
  });

  it('sets up fetched dog url', () => {
    // given
    const beforeState = {url: ''};
    const action = {type: FETCH_DOG_SUCCESS, payload: {url: 'https://dog.ceo/api/img/someDog.jpg'}};
    // when
    const afterState = dogReducer(beforeState, action);
    // then
    expect(afterState).toEqual({url: 'https://dog.ceo/api/img/someDog.jpg'});
  });
});
