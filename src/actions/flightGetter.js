// const url = "http://localhost:3000/api"
// import React

class flightGetter {


    static createFlights(flight){
      return fetch('http://localhost:3000/api/flights', {
        method: 'POST',
        body: JSON.stringify({flight: flight}),
        headers: {
          'Content-Type': 'application/json'
        },
         accepts: 'application/json'
      })
      .then(response => response.json()).catch(error => {return error})
    }

    static addLike(flight){
      
      return fetch(`http://localhost:3000/api/flights/${flight.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({flight: flight}),
        headers: {
          'Content-Type': 'application/json'
        },
         accepts: 'application/json'
      })
      .then(response => response.json()).catch(error => {return error})
    }
    static deleteFlight(flight){
      
      return fetch(`http://localhost:3000/api/flights/${flight.id}`, {
        method: 'DELETE',
        body: JSON.stringify({flight: flight}),
        headers: {
          'Content-Type': 'application/json'
        },
         accepts: 'application/json'
      })
      .then(response => response.json()).catch(error => {return error})
    }
     static loadAllFlights(){
        return fetch('http://localhost:3000/api/flights').then(response => {return response.json()
        }).catch(error => { return error})
      }
  
}
export default flightGetter