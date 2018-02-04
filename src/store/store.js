import {createStore, compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import rootReducer from './index'

const defaultState = {
  flights,
  planes
}

const store = createStore(rootReducer, defaultState)
 
export default store