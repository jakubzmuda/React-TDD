import React from 'react';
import { DogApp } from './dogApp';
import { shallow } from 'enzyme';
import RandomDog from '../randomDog/randomDog';

describe('App component', () => {

  it('renders RandomDog component', () => {
    const wrapper = shallow(<DogApp />);
    expect(wrapper.contains(<RandomDog />)).toBe(true);
  })
});