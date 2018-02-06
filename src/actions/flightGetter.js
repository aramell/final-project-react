const url = "http://localhost:3000/api"

const flightGetter =  {
  
    fetchFlights(){
  return fetch(`${url}/flights`)
  
      .then(response => response.json())
      .then(res => console.log(res))
      // console.log(data)
    }
}
export default flightGetter