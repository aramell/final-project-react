import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './App'
// import FlightContainer from './components/FlightContainer';

export default () => {
    
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
}

