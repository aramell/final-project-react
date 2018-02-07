import React from 'react'
import Flight from './Flight'
// import fetchFlights from '../actions/fetchFlights';
// import { thunk } from 'redux-thunk';
import CreateFlight from './CreateFlight'
import { loadFlights } from '../actions/flightActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShowFlight from './showFlight';
import { BrowserRouter as Route} from 'react-router-dom';

class FlightContainer extends React.Component {
  constructor(){ 
    super()
    
    // this.state = {
    //   date: '',
    //   flightTime: '',
    //   planeNumber: ''
    // }
    
  }
  componentDidMount(){
    this.props.loadFlights()

  }
  
  handleChange = event =>{

  }

  render (){
    
    return (
      <div>
        <Flight flights={this.props.flights} match={this.props.match}/>
        <Route path={`${this.props.match.url}/:flightId`} component={ShowFlight} />
        <Route exact path={this.props.match.url} render={()=> (<h3> Please select a flight to view more.</h3>)}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(FlightContainer)

// function mapDispatchToProps(dispatch){ 
//   return bindActionCreators({
//     addFlight: addFlight
//   }, dispatch)
// } 
// export default connect(mapStateToProps, mapDispatchToProps)(CreateFlight)

// export default FlightContainer