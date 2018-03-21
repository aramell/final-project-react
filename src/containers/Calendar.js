import BigCalendar from 'react-big-calendar'
import React from 'react'
import moment from 'moment'
import events from '../events

  BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {


    render(){
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
        startAccessor='startDate'
         endAccessor='endDate'
         defaultDate = {new Date(2018, 3, 21)}
      />
      </div>
      )
    }

  }
export default Calendar