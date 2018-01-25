import React from 'react';
import { App } from './dogApp';
import { shallow } from 'enzyme';
import RandomDog from '../randomDog/randomDog';

describe('App component', () => {

  it('renders RandomDog component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<RandomDog />)).toBe(true);
  })
});