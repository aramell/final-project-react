export default function fetchFlights() {
  const url = "http://localhost:3000/flights"
  
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_FLIGHTS_REQUEST' });
    return fetch(url)
  
      .then(response => response.json())
      .then(flights => dispatch({ type: 'ADD_FLIGHTS', flights }));
  };
}