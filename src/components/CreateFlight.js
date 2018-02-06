import React, { Component } from 'react';
import Flight from './Flight'
import {connect} from 'react-redux'
import addFlight from '../actions/addFlight';
import { bindActionCreators } from 'redux';
// import rootReducer from '../reducers/index';
import FlightContainer from './FlightContainer';


class CreateFlight extends Component{
  // constructor(props){
  //   super(props)
    
  //   this.state = {
  //         flightTime: '',
  //         date: '',
  //         planeNumber: ''
  //   }
    
  // }
  handleChange = event =>{
    
    const value = event.target.value
    const name = event.target.name
    this.setState({
        [name]: value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
   
    // debugger 
    // this.props.addFlight(this.state)
    debugger
    this.props.flight(this.state)
  //   this.setState({
  //             flightTime: '',
  //             date: '',
  //             planeNumber: ''
  // })
}
  render(){

    return( 
      <div className="flight">
      <h1> Create Flight </h1>
      <form className="createFlight" onSubmit={(event) => this.handleSubmit(event)}>
      <label>Date </label>
      <ul><input type="text" name="date" onChange={this.handleChange} placeholder="date"/> </ul>
      <label>Flight Time </label>
      <ul><input type="textarea" name="flightTime"  onChange={this.handleChange} placeholder="flighttime"/> </ul>
         <label>Plane number </label>
       <ul>  <input type="textarea" name="planeNumber" onChange={this.handleChange} placeholder="plane"/> </ul>
         <button type="submit"> Submit </button>
      </form>
      {/* <Flight flights={this.state.flights} /> */}
      <Flight flights={this.props.flights}/>
      </div>
    )
  }

}
function mapStateToProps(state) {
  
  return {
    flights: state.flights
     
  }
    // flightTime: state.flightTime,
    // date: state.date,
    // planeNumber: state.planeNumber}
}
function mapDispatchToProps(dispatch){ 
  return bindActionCreators({
    addFlight: addFlight
  }, dispatch)
} 
export default connect(mapStateToProps, mapDispatchToProps)(CreateFlight)

// export default CreateFlight

