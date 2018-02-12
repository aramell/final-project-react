import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addFlight } from '../actions/flightActions';
import DatePicker from 'react-date-picker'
import {Field, reduxForm} from 'redux-form'

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

    </div>
    )
  }
 

  render(){

    return( 
      <div className="flight">
          <Field 
            name="FlightTime"
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
export default reduxForm({
  form: 'FlightNewForm'
})(CreateFlight)
// export default CreateFlight

