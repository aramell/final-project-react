
import  React  from 'react';
import { connect } from 'react-redux';

const ShowFlight = ({match, flight}) => 
    
  // const flightShow = flights.find(({id}) => id === flight.match.params.id)
  //   // const flight = state.flights.find(flight => flight.id == ownProps.match.params.movied)
      <div>
        <h3> Flight Details</h3>
       {/* <p>  Pilot: {flight.pilot} </p>
       <ul>  Pilot: {flight.planeNumber} </ul>
       <ul>  Pilot: {flight.time} </ul>
       <ul>  Pilot: {flight.date} </ul>
       <ul>  Pilot: {flight.destination} </ul> */}


      </div>
  
  
  
  
  
  const mapStateToProps =(state, ownProps) =>{
    
    // const flight = state.flights.find(flight => flight.id == ownProps.match.params.id)
    
    // if(flight){
    //   return {flight}
    // }else {
    //   return {flight: {}}
    // }
    // return{
    //   movieId: ownProps.match.params.id
    // }
  }
    
  
  
  export default connect(mapStateToProps)(ShowFlight)
  // export default ShowFlight
