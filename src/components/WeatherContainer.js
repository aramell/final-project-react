import React, {Component} from 'react'

// const weather = () =>{

// }

// const fetchWeather = () =>{
  const url = 'https://avwx.rest/api/metar/'
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
      weather: [],
      altWeather: '',
      extraWeather: []
    }
  }
    componentDidMount(){
      fetch(url + `KMMU`)
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
    handleChange = event => this.setState({altWeather: event.target.value})
    handleSubmit = event => {
      event.preventDefault()
      fetch(url + this.state.altWeather)
      .then(res => res.json())
      .then(data => {
        
        if (Object.keys(data).length > 1){
            let extraWeather = 
            <div>
                 {data["Raw-Report"]}
                 <h4>last fetched </h4>
                 {data.Meta.Timestamp}
                 </div>
               this.setState({extraWeather: extraWeather})
        }
      
      })
    }
  
  render(){
    return(
      <div className="weather-container">
        {console.log(this.state.weather)}
        <h3> Current Weather at MMU </h3>
        {this.state.weather}
        {/* {this.state.altWeather} */}
        <label>Input Aiport Code for Weather </label>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
        <input type="text" onChange={(event)=> this.handleChange(event)}  />
        <button type="submit">Get Wx </button>
        {this.state.extraWeather}
        </form>

      </div>
    )
  }
}
export default WeatherContainer
