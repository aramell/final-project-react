
const FlightForm = () =>{
 <div className="flight">
 <h1> Create Flight </h1>
 <form className="createFlight" onSubmit={(event) => this.handleSubmit(event)}>
 <label>Flight Time </label>
 <ul><input type="textarea" name="flightTime"  onChange={this.handleChange} /> </ul>
    <label>Plane number </label>
  <ul>  <input type="textarea" name="planeNumber" onChange={this.handleChange}/> </ul>
    <button type="submit"> Submit </button>
 </form>
 </div>
}