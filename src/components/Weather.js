

const weather = () =>{

}

const fetchWeather = () =>{
  constructor(){
    super()
    this.state = {
      weather: []
    }
  }
  const url = 'https://avwx.rest/api/metar/KMMU'
  fetch(url)
  .then(res => res.json())
  .then(res => setState({weather: res.results}))
}