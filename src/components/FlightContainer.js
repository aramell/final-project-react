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
    fetchFlights()
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