import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addFlight } from '../actions/flightActions';
import DatePicker from 'react-date-picker'
import {Field, reduxForm} from 'redux-form'
import TimePicker from 'react-times'
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
   this.props.reset()

  }
 

  render(){
    const { handleSubmit} = this.props
    const datePicker = ({ input, label, type, className, selected, meta: { touched, error } }) => (
      <div>
        <div>
          <DatePicker {...input}
            selected={selected} placeholder={label}
            type={type} className={className}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          {touched && error && <span className="error_field">{error}</span>}
        </div>
      </div>
    )
   
    return( 
      <div className="flight">
        <h3> New Flight </h3>
        <form onSubmit={handleSubmit((event) => this.onSubmit(event))} >
        <div className="form-group">
        <Field
            name="date"
            component={datePicker}
            label="date"
            type="text"
            selected={this.renderField}
            value={this.state.value}    
          />
         
          <Field 
            name="flightTime"
            className="form-control"
            component={this.renderField}
            label="Flight Time"
            value={this.state.value}            
           />
           <Field 
           name="destination"
           label="Destination"
           component={this.renderField}
           />
      
           <Field cla
           name="plane"
           label="Plane"
           component={this.renderField}
           />
           </div>
          <button type="submit" className="btn btn-primary">Submit </button>
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

