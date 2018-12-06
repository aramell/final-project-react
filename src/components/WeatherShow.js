import React from 'react'
// import WeatherContainer from './components/WeatherContainer'
  
const WeatherShow = ({ weather, handleChange, handleSubmit, extraWeather }) => (
  
  <div className="weather-container">
    <h3> Current Weather at Morristown, NJ </h3>
    <p>{weather} </p>
    <label>Input Aiport Code for Weather </label>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange}  />
    <button type="submit">Get Wx </button> <br/>

       {extraWeather}    

    </form>

  </div>
)
export default WeatherShow