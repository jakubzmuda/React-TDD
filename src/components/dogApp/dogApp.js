import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchDog from '../../actions/fetchDog/fetchDog';
import RandomDog from '../randomDog/randomDog';
import './dogApp.css';

export class App extends Component {

  static propTypes = {
    dogUrl: PropTypes.string,
    fetchDog: PropTypes.func,
  };

  render() {
    return (
      <div className="app-container">
        <RandomDog
          fetchDog={this.props.fetchDog}
          dogUrl={this.props.dogUrl}
        />
      </div>
    );
  }
}

const mapProps = (state) => {
  return ({
    dogUrl: state.dog.url,
  });
};

const mapDispatch = {
  fetchDog,
};

export default connect(mapProps, mapDispatch)(App);
