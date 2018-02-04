import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './components/CreateFlight'
import WeatherContainer from './components/WeatherContainer'
import WeatherShow from'./components/WeatherShow'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import './App.css';
import FlightContainer from './components/FlightContainer';

class App extends Component {
  render() {
  debugger
    return (
      <div className="App">
      {/* <NavBar /> */}
      <CreateFlight/>
      <WeatherContainer />
      <FlightContainer />

      </div>
    );
  }
}
// const mapStateToProps = state =>{
//   return{ flights: state.flights}
// }

export default App
