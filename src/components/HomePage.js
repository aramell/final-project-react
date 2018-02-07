import React from 'react'
import {Link} from 'react-router-dom'
import WeatherContainer from './WeatherContainer';
// import FlightContainer from './FlightContainer';
import CreateFlight from './CreateFlight';
<<<<<<< HEAD
import FlightIndex from './FlightIndex';
=======
import FlightIndex from './FlightIndex'
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
import FlightPage from './FlightPage';

class HomePage extends React.Component{

  render(){
    return(
      <div className="header">
          <h1>Flight Scheduler </h1>
          <WeatherContainer />
<<<<<<< HEAD
           <FlightIndex />
           {/* <FlightPage />  */}
=======
          <FlightIndex />
          <FlightPage />
>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
          <CreateFlight />
      </div>
    )
  }
}
export default HomePage