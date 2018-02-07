import React from 'react'
import {Link} from 'react-router-dom'
import WeatherContainer from './WeatherContainer';
// import FlightContainer from './FlightContainer';
import CreateFlight from './CreateFlight';
import FlightIndex from './FlightIndex';
import FlightPage from './FlightPage';
import ShowFlight from './showFlight';

class HomePage extends React.Component{

  render(){
    return(
      <div className="header">
          <h1>Flight Scheduler </h1>
          <WeatherContainer />
           <FlightIndex />
           <ShowFlight />
           {/* <FlightPage store={this.store}/>  */}
          <CreateFlight />
      </div>
    )
  }
}
export default HomePage