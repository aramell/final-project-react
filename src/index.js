import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'; 
// import { ConnectedCreateFlight } from './components/CreateFlight';
const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <App  store={store}/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

// store.dispatch({ type: '@@INIT'}) just commented this out

