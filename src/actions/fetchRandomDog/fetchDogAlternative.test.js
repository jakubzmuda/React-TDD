jest.mock('axios');
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } from '../../constants/actionTypes';
import fetchDog from './fetchDog';

describe('fetchDog action', () => {

  let store;

  beforeEach(() => {
    const mockStore = configureMockStore([]);
    store = mockStore({});
  });

  it('fetches a dog', async () => {
    // given
    const response = Promise.resolve({
      data: {
        status: 'success',
        message: 'https://dog.ceo/api/img/someDog.jpg',
      },
      status: 200,
    });
    const requestMock = jest.fn().mockReturnValueOnce(response);
    axios.get.mockImplementation(requestMock);
    // when
    await fetchDog()(store.dispatch);
    // then
    expect(requestMock.mock.calls.length).toBe(1);
    expect(store.getActions().map(p => p.type)).toEqual(
      expect.arrayContaining([
        FETCH_DOG_REQUEST,
        FETCH_DOG_SUCCESS,
      ]));
  })
});