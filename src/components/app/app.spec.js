import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import setupStore from '../../setupStore';
import App from './app';

describe('App integration tests', () => {

  let store;

  beforeEach(() => {
    store = setupStore();
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('should render a placeholder when no dog image is fetched', () => {
    let wrapper = mount(<Provider store={store} ><App /></Provider >);
    expect(wrapper.find('div.dog-placeholder').text()).toEqual('No dog loaded yet. Get some!');
    expect(wrapper.find('img.dog-image').exists()).toBe(false);
  });

  it('should render a dog when requested', () => {
    let wrapper = mount(<Provider store={store} ><App /></Provider >);
    wrapper.find('.dog-button').simulate('click');

    mockAxios.mockResponse({
      data:
        {
          status: 'success',
          message: 'https://dog.ceo/api/img/someDog.jpg'
        }
    });

    wrapper.update();

    expect(mockAxios.get).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    expect(wrapper.find('img[src="https://dog.ceo/api/img/someDog.jpg"]').exists()).toBe(true);
  });

});