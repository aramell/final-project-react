import * as types from '../actions/actionTypes'
import initialState from './initialState'
import cuid from 'cuid'

export default function flightReducer(state = initialState.flights, action) {
  console.log(action)
  switch(action.type){
    case types.LOAD_FLIGHTS_SUCCESS:
    return action.flights
  switch (action.type){
    case types.ADD_FLIGHT_SUCCESS:
    // debugger
    return [
      
        ...state.filter(flight => flight.id !== action.flight.id ),
        Object.assign({}, action.flight)]
    
    }
  
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
