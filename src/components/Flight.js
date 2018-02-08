import React, {component} from 'react'
import ShowFlight from './showFlight'

import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import FlightIndex from './FlightIndex'
import FlightCard from './FlightCard'

// import HandleClick from './HandleClick';
// 

 
const Flight = ({match, flights}) => {
  
  const renderFlights =  flights.map((flight) => <FlightCard flight={flight}/>)

     
  return(
    <div>
      <h2> Future Flights </h2>
      {renderFlights}
      {/* {flights ? renderFlights : "none"} */}
      
    </div>
  )

}

export default Flight

// {/* <div><ul><Link key={flight.id} to={`/flights/${flight.id}`}> Date: {flight.date} - Pilot: {flight.pilot} - Plane: {flight.planeNumber}- Destination: {flight.destination}</Link>
// <Route path={`/flights/:flightId`} component={ShowFlight}/><button type="delete" onClick={() => HandleClick  />}/>}>Like</button></ul></div> */}