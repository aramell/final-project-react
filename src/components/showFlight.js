
import  React  from 'react';
import { connect } from 'react-redux';

const ShowFlight = ({flight}) => {
    
  // const flightShow = flights.find(({id}) => id === flight.match.params.id)
  //   // const flight = state.flights.find(flight => flight.id == ownProps.match.params.movied)
      return (
      <div>
        <h3> Flight Details</h3>
       <p>  Pilot: {flight.pilot} </p>
       <ul>  Plane Number: {flight.planeNumber} </ul>
       <ul>  Flight Time: {flight.time} </ul>
       <ul>  Date: {flight.date} </ul>
       <ul>  Destination: {flight.destination} </ul>


      </div>
      )
}
  
  
  
  
  const mapStateToProps =(state, ownProps) =>{
    
    const flight = state.flights.find(flight => flight.id === ownProps.match.params.id)
    
    if(flight){
      return {flight}
    }else {
      return {flight: {}}
    }
  }
    
  
  
  export default connect(mapStateToProps)(ShowFlight)
