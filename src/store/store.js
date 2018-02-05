import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDom from 'react-dom'
// import {syncHistoryWithStore} from 'react-router-redux'
import rootReducer from '../reducers/index'

const middlewares = [thunk]

// const defaultState = {
//   flights,
//   planes
// }

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 
export default store