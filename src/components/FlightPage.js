import React from 'react'
import Flight from './Flight'
// import fetchFlights from '../actions/fetchFlights';
// import { thunk } from 'redux-thunk';
import CreateFlight from './CreateFlight'
import { loadFlights } from '../actions/flightActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShowFlight from './showFlight';
import { BrowserRouter as Route} from 'react-router-dom';
import FlightList from './FlightList';


const FlightPage = ({match, flights}) =>

  <div>
    <FlightList flights={this.props.flights} />
  <Route path={`${match.url}/:flightId`} component={ShowFlight}/>
  <Route exact path={match.url} />
  </div>

  const mapStateToProps = state =>{
    
    return {
      flights: state.flights
    }
  }

  export default connect(mapStateToProps)(FlightPage)
