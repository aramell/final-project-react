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
// import addFlight from './actions/addFlight';
import flightGetter from './actions/flightGetter';
import configureStore from './store/configureStore';
import { loadFlights, addFlight } from './actions/flightActions';

class App extends Component {
  constructor(props){
    super(props)
 
  }

    componentDidMount(){
      // this.props.loadFlights()
      // loadFlights()
          // store.dispatch(loadFlights())

      // flightGetter.fetchFlights().then(flights => this.setState({flights}))
      
    }
    addFlight = flight =>{
      this.props.store.dispatch(addFlight(flight))
      // flightGetter.createFlights(flight).then(flight => this.setState({flight: this.state.flights.concat(flight)}))
      
    }
  render() {
    
    return (
      <div className="App">
      {/* <NavBar /> */}
        <div className="flight-index">
            <FlightContainer flights={this.props.flights}/>
        </div>
         <div className="create-flight">
          <CreateFlight addflight={this.addFlight}/>
         </div>
         <div className="weather-container">
          <WeatherContainer />
         </div>
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