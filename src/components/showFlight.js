
import { React } from 'react';
import { connect } from 'react-redux';

const ShowFlight = ({flight}) => {
  
  const flightShow = flight.find(({id}) => id === flight.match.params.id)
    // const flight = state.flights.find(flight => flight.id == ownProps.match.params.movied)
  return
  <div>
        <h3> Flight Show </h3>
       Pilot: {flightShow.pilot}
      </div>
  
  
  }
  
  const mapStateToProps =(state, ownProps) =>{
    const flight = state.flights.find(flight => flight.id == ownProps.match.params.id)
    
    if(flight){
      return {flight}
    }else {
      return {flight: {}}
    }
    // return{
    //   movieId: ownProps.match.params.id
    // }
  }
    
  
  
  export default connect(mapStateToProps)(ShowFlight)
  // export default ShowFlight