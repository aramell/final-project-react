class Api::FlightsController < ApplicationController
  def index 
    @flights = Flight.all
    respond_to do |f|
      f.json {render :json => @flights}
      # f.html
    end
  end

  def new
    @flight = Flight.new
  end
  def create
    
    @flight = Flight.create(flight_params)
    if @flight.save
    respond_to do |f|
      f.json {render :json => @flight}
     end
      else
      render json: {errors:{message: "this failed"}}
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
    params.require(:flight).permit(:time, :date, :pilot,:flightTime, :planeNumber, :squawks, :destination)
  end
  def set_flight
    @flight = Flight.bind_by(:id => params[:id])
  end
end
