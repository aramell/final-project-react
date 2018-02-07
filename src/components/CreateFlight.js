import React, { Component } from 'react';
import Flight from './Flight'
import {connect} from 'react-redux'
// import addFlight from '../actions/addFlight';
import { bindActionCreators } from 'redux';
// import rootReducer from '../reducers/index';
import FlightContainer from './FlightContainer';
import { addFlight, loadFlights } from '../actions/flightActions';
import DatePicker from 'react-date-picker'

class CreateFlight extends Component{
  constructor(props){
    super(props)
    
    this.state = {
          flightTime: '',
          date: '',
          planeNumber: '',
          destination: '',
          pilot: ''
    }
    
  }
  handleChange = event =>{
    
    const value = event.target.value
    const name = event.target.name
    this.setState({
        [name]: value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
   
    // this.props.addFlight(this.state)
    
    this.props.addflight(this.state)
    this.setState({
      flightTime: '',
      date: '',
      planeNumber: '',
      destination: '',
      pilot: ''
  })
}
  render(){

    return( 
      <div className="flight">
      <h1> Create Flight </h1>
      <form className="create-flight-form" onSubmit={(event) => this.handleSubmit(event)}>
      <label>Date </label>
      {/* <ul>< DatePicker name="date"value={this.}  onChange={this.handleChange}/></ul> */}
      <ul><input type="text" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Date"/> </ul>
      <label>Flight Time </label>
      <ul><input type="textarea" name="flightTime" value={this.state.flightTime}   onChange={this.handleChange} placeholder="Expected flight time"/> </ul>
         <label>Plane number </label>
       <ul>  <input type="textarea" name="planeNumber" value={this.state.planeNumber} onChange={this.handleChange} placeholder="which plane"/> </ul>
       <label>Destination </label>
       <ul>  <input type="textarea" name="destination" value={this.state.destination} onChange={this.handleChange} placeholder="Destination"/> </ul>
       
       <ul>  <input type="textarea" name="pilot" value={this.state.pilot} onChange={this.handleChange} placeholder="Pilot"/> </ul>

         <button type="submit"className="btn"> Submit </button>
      </form>
      {/* <Flight flights={this.state.flights} /> */}
      {/* <Flight flights={this.props.flights}/> */}
      </div>
    )
  }

}
function mapStateToProps({flights}) {
  debugger
  return {
    flights  }
    // flightTime: state.flightTime,
    // date: state.date,
    // planeNumber: state.planeNumber}
}
function mapDispatchToProps(dispatch){ 
  return bindActionCreators({
    addFlight
  }, dispatch)
} 
export default connect(mapStateToProps, mapDispatchToProps)(CreateFlight)

// export default CreateFlight

