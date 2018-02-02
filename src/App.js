import React, { Component } from 'react';
import logo from './logo.svg';
import Flight from  './componets/flight'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Flight flight={this.time} />

      </div>
    );
  }
}

export default App;
