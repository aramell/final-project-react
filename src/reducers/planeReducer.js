export default function planeReducer(state = {
  planes: []
}, action) {
  switch(action.type){
    case 'ADD_PLANE':
    
      return state.planes.concat(action.payload) // added action.payload instead of flights
    default:
    return state
    }
  }