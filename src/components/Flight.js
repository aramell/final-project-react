import React, {component} from 'react'
import FlightContainer from './FlightContainer'
// import CreateFlight from './CreateFlight';
 

 
const Flight = ({flights}) => {
  // debugger
  return(
    <div>
      <h2> Future Flights </h2>
      {/* {flights.map((flight) => {
        flight.date
        flight.flightTime
        flight.planeNumber
      })} */}
      {/* <p> {date} </p>
       <p> {time} </p>
       <p> {planeNumber}</p>
       <p>{flightTime}</p> */}
    </div>
  )

}
export default Flight