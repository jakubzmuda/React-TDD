import React, { Component } from 'react';
import './app.css';
import RandomDog from '../randomDog/randomDog';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <RandomDog/>
      </div>
    );
  }
}

export default App;
