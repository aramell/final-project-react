class PlanesController < ApplicationController
  def index
    @planes = Plane.all
    respond_to do |f|
      f.json {render json: @planes}
  end
  def new
    @planes = Plane.new

  end
  def create
    @plane = Plane.build(plane_params)
      if @plane.save

        respond_to do |f|
          f.json {render :json => @plane}
        end
  end

  def show
    set_plane
  end

  def update
     @plane.update_attributes(plane_params)
      redirect_to '/'
  end
  def destroy
    set_plane
    @plane.delete

  end
      private

  def plane_params
    params.require(:plane). permit(:number, :hours, :flight_ids => [])
  end
  def set_plane
    @plane = Plane.find_by(:id => params[:id])
  end
end