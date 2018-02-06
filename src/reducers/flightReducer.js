import * as types from '../actions/actionTypes'
export default function flightReducer(state = {
  flights: []
}, action) {
  console.log(action)
  switch(action.type){
    case types.LOAD_CATS_SUCCESS:
    return action.flights
    ///////////////////////////
    // debugger
    //    return {
    //      ...state,
    //      flights: [state.flights, action.flight]
    //    }
    //     // added action.payload instead of flights
    // case 'START_ADDING_FLIGHTS_REQUEST':
    //   return  "loading flights"
    // case 'ADD_FLIGHTS':
      // return Object.assign({}, flight, action.flight)
    default:
    return state
    }
  }
