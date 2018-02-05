import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, compose} from 'redux'
import { Provider } from 'react-redux'
import CreateFlight from './components/CreateFlight'
import thunk from 'redux-thunk'
import flightReducer from './reducers/flightReducer'
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import store from './store/store'; 
// import { ConnectedCreateFlight } from './components/CreateFlight';

// const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
    <App  />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

// store.dispatch({ type: '@@INIT'}) just commented this out

