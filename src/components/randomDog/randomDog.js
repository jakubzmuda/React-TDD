import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './randomDog.css';

class RandomDog extends Component {

  static propTypes = {
    dogUrl: PropTypes.string,
    fetchDog: PropTypes.func,
  };

  static defaultProps = {
    dogUrl: '',
    fetchDog: f => f,
  };

  render() {
    return (
      <div className="random-dog-container">
        <button className="dog-button" onClick={() => this.props.fetchDog()}>GET ME A DOG</button>
        {this.renderDogSection()}
      </div>
    );
  }

  renderDogSection() {
    if (this.props.dogUrl) {
      return (
        <img src={this.props.dogUrl} alt="doggo"/>
      );
    }
    return (
      <div className="dog-placeholder">
        No dog loaded yet. Get some!
      </div>
    );
  }
}

export default RandomDog;
