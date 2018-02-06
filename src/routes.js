import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import CreateFlight from './components/CreateFlight'
import Flight from './components/Flight';
import FlightIndex from './components/FlightIndex'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
  <Route path="/flights" component={FlightIndex} />
  </Route>
)
