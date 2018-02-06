import React from 'react'
import Flight from './Flight'
import fetchFlights from '../actions/fetchFlights';

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
  
    // dispatch({ type: 'START_ADDING_FLIGHTS_REQUEST' });
    //   return fetch(url)
  
    //   .then(response => response.json())
    //   .then(flights => dispatch({ type: 'ADD_FLIGHTS', flights }));
  
    }
  
  handleChange = event =>{

  }
  render (){
    return (
      <div>
        <Flight  />
      </div>
    )
  }
}
export default FlightContainer