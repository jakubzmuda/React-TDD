import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import setupStore from '../../setupStore';
import App from './dogApp';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('App integration tests', () => {

  let httpMock;
  let store;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    store = setupStore();
  });

  it('should render a placeholder when no dog image is fetched', () => {
    let wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper.find('div.dog-placeholder').exists()).toBe(true);
    expect(wrapper.find('img.dog-image').exists()).toBe(false);
  });

  it('should fetch and render a dog', async () => {
    httpMock.onGet('https://dog.ceo/api/breeds/image/random').reply(200, {
      status: 'success',
      message: 'https://dog.ceo/api/img/someDog.jpg'
    });

    const wrapper = mount(<Provider store={store}><App /></Provider>);
    wrapper.find('.dog-button').simulate('click');

    await flushAllPromises();
    wrapper.update();

    expect(wrapper.find('img[src="https://dog.ceo/api/img/someDog.jpg"]').exists()).toBe(true);
  });
});
