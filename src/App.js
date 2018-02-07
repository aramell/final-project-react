import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './components/CreateFlight'
// import ConnectedCreateFlight from './components/CreateFlight'  
import WeatherContainer from './components/WeatherContainer'
import WeatherShow from'./components/WeatherShow'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import FlightContainer from './components/FlightContainer';
import { bindActionCreators } from 'redux';
// import addFlight from './actions/addFlight';
import flightGetter from './actions/flightGetter';
import configureStore from './store/configureStore';
import { loadFlights, addFlight } from './actions/flightActions';
import { BrowserRouter } from 'react-router-dom';
import  HomePage  from './components/HomePage';
import ShowFlight from './components/showFlight';
import FlightIndex from './components/FlightIndex';

const App = (props) => {
  return (
    <Router>
      <div className="app">
      <switch>
        <NavBar />
        <Route exact path="/" component={HomePage} />
<<<<<<< HEAD
        <Route  path="/flights" component={FlightIndex} />
        {/* <Route  path="/flights/:id" component={ShowFlight} /> */}
=======
        <Route  path="/flights" component={FlightContainer} />
        <Route  path="/flights/:id" component={ShowFlight} />        
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
        <Route  path="/new" component={CreateFlight} />
        </switch>
      </div>
    </Router>
  );
};

export default App