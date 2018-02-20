import React from 'react'
import WeatherContainer from './WeatherContainer';
// import FlightContainer from './FlightContainer';
import CreateFlight from './CreateFlight';
import FlightIndex from './FlightIndex';
import FlightPage from './FlightPage';
import  '../images/planephoto.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import TextBox from './Textbox'
// import Calendar from '../containers/Calendar'

class HomePage extends React.Component{
 

  render(){
    const planeStyle = {
      top: 0,
      right: 0,
      height: '50%',
      width: '50%',
    }
    return(
      <div className="header">
        <div className="title">
          <img src={require(`../images/planephoto.jpg`)} id="plane" style={planeStyle}/>
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