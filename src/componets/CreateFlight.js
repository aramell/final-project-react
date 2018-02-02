import React, { Component } from 'react';

class CreateFlight extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      flightTime: '',
      planeNumber: '',
    }
    
  }
  handleChange = event =>{
    
    const value = event.target.value
    const name = event.target.name
    // const name = event.target.name
    // const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
  }
  render(){

    return( 
      <div className="flight">
      <h1> Create Flight </h1>
      <form className="createFlight" onSubmit={(event) => this.handleSubmit(event)}>
      <label>Flight Time </label>
      <ul><input type="textarea" name="flightTime"  onChange={this.handleChange} /> </ul>
         <label>Plane number </label>
       <ul>  <input type="textarea" name="planeNumber" onChange={this.handleChange}/> </ul>
         <button type="submit"> Submit </button>
      </form>
      </div>
    )
  }

}

export default CreateFlight