import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import flightReducer from './reducers/flightReducer'
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import store from './store/store';

// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App store={store}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({ type: '@@INIT'})

