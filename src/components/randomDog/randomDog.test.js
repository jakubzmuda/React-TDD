import React from 'react';
import { shallow } from 'enzyme';
import RandomDog from './randomDog';

describe('RandomDog component', () => {

  it('should render a placeholder', () => {
    const wrapper = shallow(<RandomDog />);
    expect(wrapper.find('.dog-placeholder').exists()).toBe(true);
    expect(wrapper.find('.dog-image').exists()).toBe(false);
  });

  it('should render actual dog image', () => {
    const wrapper = shallow(<RandomDog dogUrl="http://somedogurl.dog" />);
    expect(wrapper.find('.dog-placeholder').exists()).toBe(false);
    expect(wrapper.find('img[src="http://somedogurl.dog"]').exists()).toBe(true);
  });

  it('should execute fetchDog', () => {
    const fetchDog = jest.fn();
    const wrapper = shallow(<RandomDog fetchDog={fetchDog}/>);
    wrapper.find('.dog-button').simulate('click');
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });

});