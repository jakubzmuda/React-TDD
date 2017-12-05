import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } from '../../constants/actionTypes';
import fetchDog from './fetchDog';

describe('fetchDog action', () => {
  let server;
  let store;

  beforeEach(() => {
    server = sinon.fakeServer.create();
    server.autoRespond = true;

    const mockStore = configureMockStore();
    store = mockStore({});
  });

  afterEach(() => {
    server.restore();
  });

  it('fetches a dog', async () => {
    // given
    server.respondWith('GET', `https://dog.ceo/api/breeds/image/random`,
      [
        200,
        { 'Content-Type': 'application/json' },
        '{"status":"success","message":"https://dog.ceo/api/img/someDog.jpg"}'
      ]);
    // when
    await fetchDog()(store.dispatch);
    // then
    expect(server.requests.length).toBe(1);
    expect(server.requests[0].url).toBe('https://dog.ceo/api/breeds/image/random');
    expect(store.getActions().map(p => p.type)).toEqual(
      expect.arrayContaining([
        FETCH_DOG_REQUEST,
        FETCH_DOG_SUCCESS,
      ]));
  });
});