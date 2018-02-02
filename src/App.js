import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './componets/CreateFlight'
import './App.css';

class App extends Component {
  render() {
    const Flight = {

    }
    return (
      <div className="App">

      <CreateFlight flight={this.flight} />

      </div>
    );
  }
}

export default App;
