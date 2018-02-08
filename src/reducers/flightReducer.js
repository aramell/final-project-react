import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function flightReducer(state = initialState.flights, action) {
  console.log(action)
  
  switch(action.type){
    case types.LOAD_FLIGHTS_SUCCESS:
    return action.flights
  
    case types.ADD_FLIGHT_SUCCESS:
    
    return  state.concat([action.flight])

    case types.ADD_LIKE_SUCCESS:
      return state.map((flight)=> {
        if (flight.id === action.flight){
          return Object.assign({}, flight, {likes: flight.likes+1})
        }
      })
    
      // return [
      //   ...state.filter(flight => flight.id !== action.flight.id ),
      //   Object.assign({}, action.flight)]
    
    
  
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
