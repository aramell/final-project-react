import  React, {component} from 'react';
import { connect } from 'react-redux';



class ShowFlight extends React.Component {
  constructor(props){
    super()
  }

  // componentDidMount(){

  // }
  

  render(){
    return(
      <div>
          test
      </div>
    )
  }
}

function mapStateToProps(flights){
  return {
    flights
  }
}

export default connect(mapStateToProps)(ShowFlight)
// export default ShowFlight