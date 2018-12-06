import BigCalendar from 'react-big-calendar'
import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css'

  BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {
  constructor(props){
    super(props)
    
    
    
  }


    render(){
      const flights = this.props.flights.map((flight) =>{
        return flight
      })
      
      const myEventsList = 
      [
       {flights}
      
     
      ]
      let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

      return(
        <div>
          <BigCalendar
          events={myEventsList}
          views={allViews}
          type={60}
          startAccessor='startDate'
          endAccessor='endDate'
          showMultiDayTimes
          defaultDate = {new Date(2018, 3, 21)}
      />
      </div>
      )
    }

  }
  function mapStateToProps(state) {
    
    return {
      flights: state.flights
    }
  }
export default connect(mapStateToProps)(Calendar)