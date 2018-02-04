import React from 'react'
import Flight from './Flight'

class FlightContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      date: '',
      flightTime: '',
      planeNumber: ''
    }
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