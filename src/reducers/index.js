import {combineReducers} from 'redux'

import flightReducer from './flightReducer'
import {reducer as formReducer} from 'redux-form'
import planeReducer from './planeReducer'

const rootReducer = combineReducers({flights: flightReducer, planes: planeReducer, form: formReducer})

export default rootReducer