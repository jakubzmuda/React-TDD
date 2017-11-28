import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders RandomDog component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<RandomDog />).toBe(true));
  })
});