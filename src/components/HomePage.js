import React from 'react'
import WeatherContainer from './WeatherContainer';
// import FlightContainer from './FlightContainer';
import CreateFlight from './CreateFlight';
import FlightIndex from './FlightIndex';
import FlightPage from './FlightPage';
// import TextBox from './Textbox'
// import Calendar from '../containers/Calendar'

class HomePage extends React.Component{

  render(){
    return(
      <div className="header">
        <div className="title">
          <h1>Flight Scheduler </h1>
          </div>
          <div className="weather-box">
          <WeatherContainer />
          </div>
           <FlightIndex />
           {/* <TextBox /> */}
           {/* <Calendar /> */}
          
           {/* <FlightPage store={this.store}/>  */}
          <CreateFlight />
      </div>
    )
  }
}
export default HomePage