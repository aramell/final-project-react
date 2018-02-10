import React from 'react'

import FlightCard from './FlightCard'



 
const Flight = ({match, flights}) => {
  
  const sortedFlights = flights.sort(function (a,b){
    return b.likes - a.likes
  })
  const renderFlights =  sortedFlights.map((flight) => <FlightCard flight={flight}/>)

     
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