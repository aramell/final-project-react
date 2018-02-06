import {combineReducers} from 'redux'

import flightReducer from './flightReducer'
import planeReducer from './planeReducer'

const rootReducer = combineReducers({flights: flightReducer, planes: planeReducer})

export default rootReducer