import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addFlight } from '../actions/flightActions';
import DatePicker from 'react-date-picker'
import {Field, reduxForm} from 'redux-form'

import { Link } from 'react-router-dom';

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
//   handleChange = event =>{
    
//     const value = event.target.value
//     const name = event.target.name
//     this.setState({
//         [name]: value
//     })
    
//   }


//   handleSubmit = event => {
//     event.preventDefault()
       
//     this.props.addFlight(this.state)
//     this.setState({
//       flightTime: '',
//       date: '',
//       planeNumber: '',
//       destination: '',
//       pilot: ''
//   })
// }
      
  renderField = field =>{
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
           {...field.input}
      />
          {field.meta.touched ? field.meta.error : ''}
          {/* automatically added  */}
    </div>
    )
  }
  onSubmit(value) {
    this.props.addFlight(value)
    this.state = {
      flightTime: '',
      date: '',
      planeNumber: '',
      destination: '',
      pilot: ''
}

  }
 

  render(){
    const { handleSubmit} = this.props

    return( 
      <div className="flight">
        <form onSubmit={handleSubmit((event) => this.onSubmit(event))}>
          <Field 
            name="flightTime"
            component={this.renderField}
            label="FlightTime"
           />
           <Field 
           name="destination"
           label="Destination"
           component={this.renderField}
           />
           <Field 
           name="date"
           label="Date"
           component={this.renderField}
           />
           <Field 
           name="plane"
           label="Plane"
           component={this.renderField}
           />
          <button type="submit" blassName="btn btn-primary">Submit </button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }

}
// function mapStateToProps({flights}) {
  
//   return {
//     flights  }
//     // flightTime: state.flightTime,
//     // date: state.date,
//     // planeNumber: state.planeNumber}
// }
// function mapDispatchToProps(dispatch){ 
//   return bindActionCreators({
//     addFlight
//   }, dispatch)
// } 
// export default connect(mapStateToProps, mapDispatchToProps)(CreateFlight)
function validate(values){
  const errors = {}
  if (!values.plane){
    errors.plane = "Enter a Plane"
  }
  if (!values.destination){
    errors.destination = "Enter a Destination"
  }
  if (!values.date){
    errors.date = "Enter a Date"
  }
  if (!values.flightTime){
    errors.flightTime = "Enter a Time"
  }
  return errors
}
export default reduxForm({
  validate,
  form: 'FlightNewForm'
})(
  connect(null, {addFlight})(CreateFlight
))
// export default CreateFlight

