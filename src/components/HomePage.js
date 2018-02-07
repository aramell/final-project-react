import React from 'react'
import {Link} from 'react-router-dom'
import WeatherContainer from './WeatherContainer';

class HomePage extends React.Component{

  render(){
    return(
      <div className="header">
          <h1>Flight Scheduler </h1>
          <WeatherContainer />
      </div>
    )
  }
}
export default HomePage