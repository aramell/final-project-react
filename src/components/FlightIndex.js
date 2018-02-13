import  React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadFlights } from '../actions/flightActions';
import Flight from './Flight';

class FlightIndex extends React.Component {
 
  componentDidMount(){
    this.props.loadFlights()
    
  }
  
  handleChange = event =>{

  }

  render (){
    
    return (
      <div className="future-flights">
        <Flight flights={this.props.flights} match={this.props.match}/>
        {/* <ShowFlight /> */}
        {/* <Route path={`${this.props.match.url}/:flightId`} component={ShowFlight} />
        <Route exact path={this.props.match.url} render={()=> (<h3> Please select a flight to view more.</h3>)}/> */}
      </div>
    )
  }

}
function mapDispatchToProps(dispatch){
   return  bindActionCreators({

    loadFlights: loadFlights
   }, dispatch)
  }

function mapStateToProps(state){
  return{
    flights: state.flights
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlightIndex)