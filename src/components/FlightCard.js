
import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import ShowFlight from './showFlight';
import { bindActionCreators } from 'redux';
import  {addLike, deleteFlight}  from '../actions/flightActions';
// import moment from 'moment'
import { connect } from 'react-redux';
var moment = require('moment')

class FlightCard extends Component{
  constructor(props){
    super(props)
    this.state ={
      likes: ''
    }
  }
 

  persistLike(event){
 
    const updatedFlight = Object.assign({}, this.props.flight, {likes: this.props.flight.likes +1})
    this.props.addLike(updatedFlight)
  }
  handleDelete(event){
    const flight = this.props.flight
    
    this.props.deleteFlight(flight)
  }
  
  render(){
      const date = this.props.flight.date
// debugger
    return(
   
    <div><ul><Link key={this.props.flight.id} to={`/flights/${this.props.flight.id}`}> Date: {moment(date).format('MMMM Do YYYY')} - Flight Time: {this.props.flight.flightTime} - Destination: {this.props.flight.destination}</Link>
<Route path={`/flights/:flightId`} component={ShowFlight}/><button type="submit"  onClick={(event) => this.persistLike(event)}>Like</button> {this.props.flight.likes}<button type="submit" onClick={(event)=>this.handleDelete(event)}>Delete</button></ul></div>
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