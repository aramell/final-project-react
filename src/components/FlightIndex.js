import  React, {Component} from 'react';
import HomePage from './HomePage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadFlights } from '../actions/flightActions';
import Flight from './Flight';

class FlightIndex extends React.Component {
  constructor(){ 
    super()
    
    
<<<<<<< HEAD
  }
  componentDidMount(){
    this.props.loadFlights()
    
  }
  
  handleChange = event =>{

  }

=======
  }
  componentDidMount(){
    this.props.loadFlights()

  }
  
  handleChange = event =>{

  }

>>>>>>> f6c5de03ee51eb1f7c69ef07b2a5242347eaee0b
  render (){
    
    return (
      <div>
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