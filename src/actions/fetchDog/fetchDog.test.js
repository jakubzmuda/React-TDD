import mockAxios from 'jest-mock-axios';
import configureMockStore from 'redux-mock-store';
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS } from '../../constants/actionTypes';
import fetchDog from './fetchDog';

jest.mock('axios');

describe('fetchDog action', () => {

  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('fetches a dog', () => {
    // given
    const dogApiResponse = {
      status: 'success',
      message: 'https://dog.ceo/api/img/someDog.jpg',
    };
    // when
    fetchDog()(store.dispatch);
    mockAxios.mockResponse({
      data: dogApiResponse
    });
    // then
    expect(mockAxios.get).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    expect(store.getActions().map(p => p.type)).toEqual(
      expect.arrayContaining([
        FETCH_DOG_REQUEST,
        FETCH_DOG_SUCCESS,
      ]));
  })
});