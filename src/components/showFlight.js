import  React, {component} from 'react';
import { connect } from 'react-redux';


const ShowFlight = flight => {
debugger
// const flight = flight.find(({id}) => id === match.params.flightId)
  // const flight = state.flights.find(flight => flight.id == ownProps.match.params.movied)
return(
<div>
      <h3> Flight Show </h3>
      {flight}
    </div>

)
}

const mapStateToProps = (state, ownProps) => {
  const flight = state.flights.find(flight => flight.id == ownProps.match.params.flightId)
  if (flight){
    return {flight}
  } else {
    return {flight: {} }
  }

  // flightId: ownProps.match.params.flightId
  }


export default connect(mapStateToProps)(ShowFlight)
// export default ShowFlight