import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './components/CreateFlight'
import WeatherContainer from './components/WeatherContainer'
// import Flight from './components/Flight'
import './App.css';

class App extends Component {
  render() {
    const Flight = {

    }
    return (
      <div className="App">

      <CreateFlight  />
      <WeatherContainer />

      </div>
    );
  }
}

export default App;
