import React from 'react'
import WeatherContainer from './components/WeatherContainer'
  
const WeatherShow = props => {
  <div className="weather-container">
    {console.log(props.weather)}
    <h3> Current Weather at MMU </h3>
    {props.weather}
    {/* {this.state.altWeather} */}
    <label>Input Aiport Code for Weather </label>
    <form onSubmit={props.handleSubmit}>
    <input type="text" onChange={props.handleChange}  />
    <button type="submit">Get Wx </button>
    {props.extraWeather}
    </form>

  </div>
}
export default WeatherShow