
import flightGetter from './flightGetter';
import * as types from './actionTypes'

// export default function addFlight(flight){
//   return{
//     type: 'ADD_FLIGHT',
//       flight
//   }

// }

export function loadFlights(){
  return function (dispatch){
    
    return flightGetter.loadAllFlights().then(flights => {
      dispatch(loadFlightsSuccess(flights))
    }).catch(error => { throw(error)})
  }
}
export function loadFlightsSuccess(flights){
  return{type: types.LOAD_FLIGHTS_SUCCESS, flights}
}