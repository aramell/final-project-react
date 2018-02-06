import React, { Component } from 'react';
import logo from './logo.svg';
import CreateFlight from  './components/CreateFlight'
// import ConnectedCreateFlight from './components/CreateFlight'  
import WeatherContainer from './components/WeatherContainer'
import WeatherShow from'./components/WeatherShow'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import { Router, browserHistory } from 'react-router';  

import './App.css';
import FlightContainer from './components/FlightContainer';
import { bindActionCreators } from 'redux';
import addFlight from './actions/addFlight';
import flightGetter from './actions/flightGetter';
import configureStore from './store/configureStore';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      flights: []
    }
  }

    componentDidMount(){
      flightGetter.fetchFlights().then(flights => this.setState({flights}))
      
    }
    addFlight = flight =>{
      
      flightGetter.createFlights(flight).then(flight => this.setState({flight: this.state.flights.concat(flight)}))
      
    }
  render() {
    
    return (
      <div className="App">
      {/* <NavBar /> */}
      <div className="create-flight">
      <CreateFlight flight={this.addFlight}/>
      </div>
      <div className="weather-container">
      <WeatherContainer />
      </div>
      <FlightContainer flights ={this.state.flight} />

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{ flights: state.flights}
}
// const mapDispatchToProps = dispatch =>{
//   return bindActionCreators( addFlight),
//     dispatch
// }

export default connect(mapStateToProps)(App)
// export default App