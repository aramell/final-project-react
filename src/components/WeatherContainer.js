import React, {Component} from 'react'
import WeatherShow from './WeatherShow'


  const url = 'https://avwx.rest/api/metar/'


 class WeatherContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      weather: [],
      altWeather: '',
      extraWeather: []
    }
  }
    componentDidMount(){
      fetch(url + `KMMU`)
          .then(res =>  res.json())
          .then(data => {
            let weather = data["Raw-Report"]
           this.setState({weather: weather})
          
      })
  
    }
    handleChange = event => this.setState({altWeather: event.target.value})
    handleSubmit = event => {
      event.preventDefault()
      fetch(url + this.state.altWeather)
      .then(res => res.json())
      .then(data => {
        if (Object.keys(data).length > 1){
            let extraWeather = [data["Raw-Report"], data.Meta.Timestamp]
            // <div>
            //      {data["Raw-Report"]}
            //      <h4>last fetched </h4>
            //      {data.Meta.Timestamp}
            //      </div>
               this.setState({extraWeather: extraWeather})
        }
      })
    }
    render() {
      return (
        <div>
        <WeatherShow weather={this.state.weather} extraWeather={this.state.extraWeather} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      )
    }
  }


export default WeatherContainer
