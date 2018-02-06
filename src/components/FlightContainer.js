import React from 'react'
import Flight from './Flight'
// import fetchFlights from '../actions/fetchFlights';
// import { thunk } from 'redux-thunk';
import CreateFlight from './CreateFlight'

class FlightContainer extends React.Component {
  constructor(){
    super()
    
    // this.state = {
    //   date: '',
    //   flightTime: '',
    //   planeNumber: ''
    // }
    
  }
  componentDidMount(){
    // const url = "http://localhost:3000/flights"
    // // debugger
    // // dispatch({ type: 'START_ADDING_FLIGHTS_REQUEST' });
    //   return dispatch =>{
    //     fetch(url)
    //   .then(response => response.json())
    //   .then(flights => dispatch({ type: 'ADD_FLIGHTS', flights }));
    // debugger
    // }
  }
  
  handleChange = event =>{

  }

  render (){
    // debugger
    return (
      <div>
        <Flight flights={this.props.flights}/>
      </div>
    )
  }

}
// mapStateToProps = state =>{
//   return{
//     flights: state.flights
//   }
// }
export default FlightContainer