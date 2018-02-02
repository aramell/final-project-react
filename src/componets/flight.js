import React, { Component } from 'react';

class Flight extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value: ''
    }
  }
  render(){
    return( 
      <div className="flight">
      <h1> Flight Details: </h1> {this.props.details}
      <h3> Flight Time: </h3> {this.props.time}
      <h3> Plane: </h3> {this.props.plane}
      </div>
    )
  }

}

export default Flight