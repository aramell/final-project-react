import React from 'react';

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
export default FlightList 