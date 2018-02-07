<<<<<<< HEAD
import React from 'react';

=======
import { React } from 'react';
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
import {Link} from 'react-router-dom'

const FlightList = ({flights}) => {
  const renderFlights = flights.map(flight =>
  <Link key={flight.id} to={`/flights/${flight.id}`}> {flight.pilot}</Link>
  )

  return (
    <div>
      {renderFlights}
      </div>
  )
}
<<<<<<< HEAD
export default FlightList 
=======
export default FlightList
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
