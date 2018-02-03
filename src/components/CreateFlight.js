import React, { Component } from 'react';
import Flight from './Flight'


class CreateFlight extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      flights: [],
          // flightTime: '',
          // date: '',
          // planeNumber: '',

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
    debugger
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

export default CreateFlight