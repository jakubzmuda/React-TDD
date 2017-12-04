import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './randomDog.css';

class RandomDog extends Component {

  static propTypes = {
    dogUrl: PropTypes.string,
  };

  static defaultProps = {
    dogUrl: '',
  };

  render() {
    return (
      <div className="random-dog-container">
        <button className="dog-button">GET ME A DOG</button>
        {this.renderDogSection()}
      </div>
    );
  }


  renderDogSection() {
    if (this.props.dogUrl) {
      return (
        <img src={this.props.dogUrl} />
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
