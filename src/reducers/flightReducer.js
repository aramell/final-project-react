export default function flightReducer(state = {
  flights: []
}, action) {
  console.log(action)
  switch(action.type){
    case 'ADD_FLIGHT':
    debugger
      return [...state,{
        flightTime: action.flightTime,
        date: action.date

      }]// added action.payload instead of flights
    default:
    return state
    }
  }
