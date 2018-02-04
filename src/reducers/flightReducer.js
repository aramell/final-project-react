export default function
flightReducer(state = {
  flights: []
}, action) {
  switch(action.type){
    case 'ADD_FLIGHT':
      return state.flights.concat(state.flights) // fix the add flight
    default:
    return state
    }
  }
