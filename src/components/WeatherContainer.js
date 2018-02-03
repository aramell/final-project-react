import React, {Component} from 'react'

// const weather = () =>{

// }

// const fetchWeather = () =>{
  const url = 'https://avwx.rest/api/metar/KMMU'
//   fetch(url)
//   .then(res =>  res.json())
//   .then(data => { 
//     let weather = data["Raw-Report"]
//     this.setState({weather: weather})
//     })
  
// }

 class WeatherContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      weather: []
    }
  }
    componentDidMount(){
      fetch(url)
          .then(res =>  res.json())
          .then(data => { 
            
           let weather = 
           <div>
             {data["Raw-Report"]}
             <h4>last fetched </h4>
             {data.Meta.Timestamp}
             </div>
           this.setState({weather: weather})
      })
  
    }
  
  render(){
    return(
      <div className="weather-container">
        {console.log(this.state.weather)}
        <h3> Current Weather at MMU </h3>
        {this.state.weather}
      
      </div>
    )
  }
}
export default WeatherContainer
