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

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route  path="/flights" component={FlightContainer} />
        <Route  path="/new" component={CreateFlight} />

        {/* <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} /> */}
      </div>
    </Router>
  );
};

export default App
// class App extends Component {
//   constructor(props){
//     super(props)
 
//   }

//     componentDidMount(){

      
//     }
//     addFlight = flight =>{
//       this.props.store.dispatch(addFlight(flight))
//       // flightGetter.createFlights(flight).then(flight => this.setState({flight: this.state.flights.concat(flight)}))
      
//     }
//   render() {
    
//     return (
//       <div className="App">
//         <div className="App-header">
//         <h2> Flight Manager </h2>
//         </div>
//       {/* <NavBar /> */}
//         <div className="flight-index">
//             <FlightContainer />
//         </div>
//          <div className="create-flight">
//           <CreateFlight addflight={this.addFlight}/>
//          </div>
//          <div className="weather-container">
//           <WeatherContainer />
//          </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state =>{
//   return{ flights: state.flights}
// }
// // const mapDispatchToProps = dispatch =>{
// //   return bindActionCreators( addFlight),
// //     dispatch
// // }

// export default connect(mapStateToProps)(App)
// export default App