import React from 'react';
import CreateFlight from  './components/CreateFlight'
// import ConnectedCreateFlight from './components/CreateFlight'  
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import  HomePage  from './components/HomePage';
import ShowFlight from './components/showFlight';
import FlightIndex from './components/FlightIndex';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route  path="/flights" component={FlightIndex} />
        <Route  path="/flights/:id" component={ShowFlight} />
        <Route  path="/new" component={CreateFlight} />
      
      </div>
    </Router>
  );
};

export default App