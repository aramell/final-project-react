
import flightGetter from './flightGetter';

// export default function addFlight(flight){
//   return{
//     type: 'ADD_FLIGHT',
//       flight
//   }

// }

export function loadFlights(){
  return function (dispatch){
    return flightGetter.loadFlights().then(flights => {
      dispatch(loadFlightsSucccess(flights))
    }).catch(error => { throw(error)})
  }
}
