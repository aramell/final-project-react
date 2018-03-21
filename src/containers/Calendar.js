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
      // debugger
      const myEventsList = 
      [
        {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2018, 3, 0),
          end: new Date(2018, 3, 1),
        },
        {
          id: 1,
          title: 'Long Event',
          start: new Date(2018, 3, 7),
          end: new Date(2018, 3, 10),
        },
      
     
      ]
      let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

      return(
        <div>
          <BigCalendar
        events={myEventsList}
        views={allViews}
        startAccessor='startDate'
         endAccessor='endDate'
         showMultiDayTimes
         defaultDate = {new Date(2018, 3, 21)}
      />
      </div>
      )
    }

  }
  const mapStateToProps = state =>{
    
    return {
      flights: state.flights
    }
  }
export default connect(mapStateToProps)(Calendar)