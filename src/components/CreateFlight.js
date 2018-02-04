import React, { Component } from 'react';
import Flight from './Flight'
import FlightReducer from '../reducers/flightReducer'
import {connect} from 'react-redux'


class CreateFlight extends React.Component{
  constructor(props){
    super(props)

    this.state = {
          flightTime: '',
          date: '',
          planeNumber: ''
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
    
    this.props.dispatch({ type: 'ADD_FLIGHT', flight: this.state})
  }
  render(){

    return( 
      <div className="flight">
      <h1> Create Flight </h1>
      <form className="createFlight" onSubmit={(event) => this.handleSubmit(event)}>
      <label>Date </label>
      <ul><input type="text" name="date" onChange={this.handleChange}/> </ul>
      <label>Flight Time </label>
      <ul><input type="textarea" name="flightTime"  onChange={this.handleChange} /> </ul>
         <label>Plane number </label>
       <ul>  <input type="textarea" name="planeNumber" onChange={this.handleChange}/> </ul>
         <button type="submit"> Submit </button>
      </form>
      <Flight flights={this.state.flights} />
      </div>
    )
  }

}
const mapStateToProps = state =>{
  return {flights: state.flights}
}

export default connect(mapStateToProps)(CreateFlight)