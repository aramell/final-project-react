import React from 'react'
import WeatherContainer from './WeatherContainer';
// import FlightContainer from './FlightContainer';
import CreateFlight from './CreateFlight';
import FlightIndex from './FlightIndex';
import FlightPage from './FlightPage';
import Calendar from '../containers/Calendar'

class HomePage extends React.Component{

  render(){
    return(
      <div className="header">
          <h1>Flight Scheduler </h1>
          <WeatherContainer />
           <FlightIndex />
           <Calendar />
          
           {/* <FlightPage store={this.store}/>  */}
          <CreateFlight />
      </div>
    )
  }
}
export default HomePage