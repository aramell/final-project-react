import  React, {component} from 'react';
import { connect } from 'react-redux';


class ShowFlight extends React.Component {

  componentDidMount(){

  }

  render(){
    return(
      <div>
          test
      </div>
    )
  }
}

function mapStateToProps(state){
  return{ 
    flights: state.flights
  }
}

export default connect(mapStateToProps)(ShowFlight)
// export default ShowFlight