import React, {component} from 'react'
import ShowFlight from './showFlight'

import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
<<<<<<< HEAD
import ShowFlight from './showFlight';
import FlightIndex from './FlightIndex'
=======
// import ShowFlight from './showFlight';
import FlightIndex from './FlightIndex';
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b

 
const Flight = ({match, flights}) => {
  
  
  const renderFlights =  flights.map((flight) => <div><ul><Link key={flight.id} to={`/flights/${flight.id}`}> Date: {flight.date} - Pilot: {flight.pilot} - Plane: {flight.planeNumber} </Link>
    <Route path={`/flights/:flightId`} component={ShowFlight}/></ul></div>)

     
  return(
    <div>
      <h2> Future Flights </h2>
      {renderFlights}
      {/* {flights ? renderFlights : "none"} */}
      
    </div>
  )

}
export default Flight