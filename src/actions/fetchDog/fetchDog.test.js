import configureMockStore from 'redux-mock-store';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } from '../../constants/actionTypes';
import fetchDog from './fetchDog';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('fetchDog action', () => {

  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it('fetches a dog', async () => {
    // given
    httpMock.onGet('https://dog.ceo/api/breeds/image/random').reply(200, {
      status: 'success',
      message: 'https://dog.ceo/api/img/someDog.jpg',
    });
    // when
    fetchDog()(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions().map(p => p.type)).toEqual(
      expect.arrayContaining([
        FETCH_DOG_REQUEST,
        FETCH_DOG_SUCCESS,
      ]));
  })
});