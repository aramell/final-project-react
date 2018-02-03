import React, {component} from 'react'


 
const Flight = ({date, time, planeNumber, flightTime}) => {
  return(
    <div>
      <p> {date} </p>
       <p> {time} </p>
       <p> {planeNumber}</p>
       <p>{flightTime}</p>
    </div>
  )

}
export default Flight