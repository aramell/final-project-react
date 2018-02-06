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
import configureStore from './store/configureStore'; 
import { loadFlights } from './actions/flightActions';
// import { ConnectedCreateFlight } from './components/CreateFlight';
const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <App  store={store}/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

// store.dispatch({ type: '@@INIT'}) just commented this out

