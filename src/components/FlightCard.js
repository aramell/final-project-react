
import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import ShowFlight from './showFlight';
import { bindActionCreators } from 'redux';
import  {addLike, deleteFlight}  from '../actions/flightActions';

import { connect } from 'react-redux';

class FlightCard extends Component{
  constructor(props){
    super(props)
    this.state ={
      likes: ''

      // id: this.props.flight.id,
      // date: this.props.flight.date,
      // planeNumber: this.props.flight.planeNumber,
      // pilot: this.props.flight.pilot,
    }
  }
  // handleClick = (event) =>{
  //   debugg
  //   this.setState({
  //     likes: this.state.likes +1

  //   })
  //   debugger
  // }
  // callAPI(event){
  //   fetch('http://localhost:3000/api/flights')
  //   .then(res => {
  //     if (res.status !== 200){
  //       throw new Error("very bad request")
  //     } 
  //     else return res.json()
  //     })
    
  //   //a,e,b,c + data, d + err,
  
  // }

  persistLike(event){
    // this.setState({
    //   likes: this.state.likes +1

    // })
    // debugger
    const updatedFlight = Object.assign({}, this.props.flight, {likes: this.props.flight.likes +1})
    this.props.addLike(updatedFlight)
  }
  handleDelete(event){
    const flight = this.props.flight
    this.props.deleteFlight(flight)
  }
  render(){
    return(
   
    <div><ul><Link key={this.props.flight.id} to={`/flights/${this.props.flight.id}`}> Date: {this.props.flight.date} - Pilot: {this.props.flight.pilot} - Plane: {this.props.flight.planeNumber}- Destination: {this.props.flight.destination}</Link>
<Route path={`/flights/:flightId`} component={ShowFlight}/><button type="submit"  onClick={(event) => this.callAPI(event)}>Like</button> {this.props.flight.likes}<button type="submit" onClick={(event)=>this.handleDelete(event)}>Delete</button></ul></div>
      )
    }
    
  }
  function mapStateToProps(flights){
    
    return {flights}
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      addLike,
      deleteFlight
    }, dispatch)
  }

// export default FlightCard
export default connect(mapStateToProps, mapDispatchToProps)(FlightCard)