const url = "http://localhost:3000/api"

const flightGetter =  {
  
    fetchFlights(){
  return fetch(`${url}/flights`)
  
      .then(response => response.json())
    debugger
    }
}
export default flightGetter