import React from 'react'
// import WeatherContainer from './components/WeatherContainer'
  
const WeatherShow = props => (
  
  <div className="weather-container">
    <h3> Current Weather at Morristown, NJ </h3>
    <p>{props.weather} </p>
    <label>Input Aiport Code for Weather </label>
    <form onSubmit={props.handleSubmit}>
    <input type="text" onChange={props.handleChange}  />
    <button type="submit">Get Wx </button> <br/>

       {props.extraWeather}    

    </form>

  </div>
)
export default WeatherShow