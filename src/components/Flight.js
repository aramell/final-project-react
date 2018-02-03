import React, {component} from 'react'
import FlightContainer from './FlightContainer'

 
const Flight = ({date, time, planeNumber, flightTime}) => {
  return(
    <div>
      <h2> Future Flights </h2>
      <p> {date} </p>
       <p> {time} </p>
       <p> {planeNumber}</p>
       <p>{flightTime}</p>
    </div>
  )

}
export default Flight