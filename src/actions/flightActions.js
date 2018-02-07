
import flightGetter from './flightGetter';
import * as types from './actionTypes'
import { thunk } from 'redux-thunk';

export  function addFlight(flight){
  return function (dispatch){

    return flightGetter.createFlights(flight).then(flight=>{
      dispatch(createFlightSuccess(flight))
    }).catch(error => {throw(error)})
    }
  }
export function createFlightSuccess(flight){
      return {type: types.ADD_FLIGHT_SUCCESS, flight}
    }
  
  



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