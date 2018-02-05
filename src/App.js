import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './components/CreateFlight'
// import ConnectedCreateFlight from './components/CreateFlight'  
import WeatherContainer from './components/WeatherContainer'
import WeatherShow from'./components/WeatherShow'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import './App.css';
import FlightContainer from './components/FlightContainer';
import { bindActionCreators } from 'redux';
import addFlight from './actions/addFlight';

class App extends Component {

  render() {
  
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
// const mapDispatchToProps = dispatch =>{
//   return bindActionCreators( addFlight,
//     dispatch
//   )
// }

// const App =  connect(mapStateToProps, mapDispatchToProps)(App)
export default App