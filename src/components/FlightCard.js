
import React from 'react'
import {Link, Route} from 'react-router-dom'
import ShowFlight from './showFlight';
import { bindActionCreators } from 'redux';
import { addLike } from '../actions/flightActions';

import { connect } from 'react-redux';

class FlightCard extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      likes: 0
      
    }
  }

  persistLike(event){
    debugger
  }
  // handleClick = (event) =>{
  //   this.setState({
  //     likes: this.state.likes +1

  //   })
  // }
  render(){
    return(
    <div><ul><Link key={this.props.flight.id} to={`/flights/${this.props.flight.id}`}> Date: {this.props.flight.date} - Pilot: {this.props.flight.pilot} - Plane: {this.props.flight.planeNumber}- Destination: {this.props.flight.destination}</Link>
<Route path={`/flights/:flightId`} component={ShowFlight}/><button type="delete" onClick={(event) => this.persistLike(event)}>Like</button> {this.state.likes}</ul></div>
      )
    }
    
  }
  const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      addLike
    }), dispatch
  }

// export default FlightCard
export default connect(null, mapDispatchToProps)(FlightCard)