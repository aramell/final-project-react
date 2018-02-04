export default function flightReducer(state = {
  flights: []
}, action) {
  console.log(action)
  switch(action.type){
    case 'ADD_FLIGHT':
    debugger
      return state.flights.concat(state.flights) // fix the add flight
    default:
    return state
    }
  }
