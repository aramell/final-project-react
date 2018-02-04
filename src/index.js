import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import flightReducer from './reducers/flightReducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(flightReducer)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();

