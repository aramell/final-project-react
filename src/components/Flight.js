import React, {component} from 'react'
// import FlightContainer from './FlightContainer'
// // import CreateFlight from './CreateFlight';
 

 
const Flight = ({flights}) => {

  
  const renderFlights =  flights.map((flight) => <div><ul> {flight.id} </ul> </div>)
     
  return(
    <div>
      <h2> Future Flights </h2>
      {flights ? renderFlights : "none"}
      {/* // <p>{flights > 0 renderFlights : "no flights yet"} </p> */}
      
    </div>
  )

}
export default Flight