class Api::FlightsController < ApplicationController
  def index 
    @flights = Flight.all
    respond_to do |f|
      f.json {render :json => @flight}
      # f.html
    end
  end

  def new
    @flight = Flight.new
  end
  def create
    @flight = Flight.create(flight_params)
    respond_to do |f|
      f.json {render :json => @flight}
    end
  end
  def edit
    @flight = Flight.Find(:id)
  end
  def show
    set_flight
    respond_to do |f|
      f.json {render json: @flight}
    end
  end

  def destroy
    set_flight
    @flight.delete
  end

  private
  def flight_params
    params.require(:flight).permit(:time, :flighthours, :planenumber)
  end
  def set_flight
    @flight = Flight.bind_by(:id => params[:id])
  end
end
