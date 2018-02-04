class ApplicationController < ActionController::API

  def index 
    @flights = Flight.all
  end

  def new 
    @flight = Flight.new
  end

  def create
    @flight = Flight.create(flight_params)
  end

  def show
    @flight = Flight.find(params[:id])

  end

  def edit
    @flight = Flight.find(id: )
  end

  private
  def flight_params
    params.require(:flight).permit(:date, :planenumber, :time, :flighttime)
  end
end
