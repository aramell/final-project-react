class FlightController < ApplicationController
  def index 
    @flight = Flight.all
  end

  def new
    @flight = Flight.new
  end
  def create
    @flight = Flight.create(flight_params)
  end
  def edit
    @flight = Flight.Find(:id)
  end

  def delete

  end

  private
  def flight_params
    params.require(:flight).permit(:time, :flighthours, :planenumber)
  end
end
