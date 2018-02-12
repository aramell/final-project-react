import BigCalendar from 'react-big-calendar'
import React from 'react'
import moment from 'moment'
import events from '../events'

class Calendar extends React.Component {
  constructor(props){
    super(props)
    BigCalendar.momentLocalizer(moment);
    let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

    debugger
  }
  
  myEventsList = () =>{

  }

// function Event({ event }) {
//     return (
//         <span>
//       <strong>
//       {event.title}
//       </strong>
//             { event.desc && (':  ' + event.desc)}
//     </span>
//     )
// }

 EventAgenda = ({ event }) => {
    return <span>
    <em style={{ color: 'magenta'}}>{event.title}</em >  <p>{ event.desc }</p> </span>
}

  // function Even

  render(){
    return (


    <BigCalendar
        // events={myEventsList}
        // views={allViews}
        // step={30}
        // timeslots={2}
        // defaultView='week'
        // defaultDate={new Date()}
        // components={{
        //              event: Event,
        //              agenda: {
        //                       event: EventAgenda
        //          }
        // }}
       />
    )}

  }
export default Calendar