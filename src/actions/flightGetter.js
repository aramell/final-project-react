const url = "http://localhost:3000/api"

const flightGetter =  {
  
    fetchFlights(){
  return fetch(`${url}/flights`)
  
      .then(response => response.json())
    },

    createFlights(flight){
      return fetch(`${url}/flights`, {
        method: 'POST',
        body: JSON.stringify({flight: flight}),
        headers: {
          'Content-Type': 'application/json'
        },
         accepts: 'application/json'
      })
      .then(response => response.json())
    }
}
export default flightGetter