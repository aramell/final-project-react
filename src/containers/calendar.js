import BigCalendar from 'react-big-calendar'

<BigCalendar
events={myEventsList}
views={allViews}
step={30}
timeslots={2}
defaultView='week'
defaultDate={new Date()}
components={{
             event: Event,
             agenda: {
                      event: EventAgenda
             }
}}
/>