import React from 'react'
import Flight from './Flight'
// import fetchFlights from '../actions/fetchFlights';
// import { thunk } from 'redux-thunk';
import CreateFlight from './CreateFlight'
import { loadFlights } from '../actions/flightActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    // debugger
    return (
      <div>
        <Flight flights={this.props.flights}/>
      </div>
    )
  }

}
function mapDispatchToProps(dispatch){
   return  bindActionCreators({
      loadFlights: loadFlights
   }, dispatch)
  }

// mapStateToProps = state =>{
//   return{
//     flights: state.flights
//   }
// }
export default connect(null, mapDispatchToProps)(FlightContainer)

// function mapDispatchToProps(dispatch){ 
//   return bindActionCreators({
//     addFlight: addFlight
//   }, dispatch)
// } 
// export default connect(mapStateToProps, mapDispatchToProps)(CreateFlight)

// export default FlightContainer