class HousesController < ApplicationController

  def new
    # keywords = params[:keywords]
    # puts params
    # api_key = ENV['api_key']
    # zws_id = ENV['zws-id']


    puts 'putting address inside houses controller'+params[:address]
    url = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19m4sjxwsgb_2m43a&address=#{params[:address]}&citystatezip=#{params[:citystatezip]}"
    puts url
    response = HTTParty.get(url)
    parsed_body = Crack::XML.parse(response.body)
    # puts parsed_body.to_json
    render json: parsed_body
    @house = parsed_body.to_json
  end


  def index
    @houses = House.where(:user_id => current_user.id)
  end

  def create
    puts current_user.id

    @house = House.new(house_params.merge(user_id: current_user.id))
    if @house.save
        flash[:success] = "House added!"
        redirect_to root_url
    else
      head 422
    end
  end


  def destroy
     @house = House.find(params[:id])
     @house.destroy if @house.user_id == current_user.id
  end

  private
  def house_params
    params.permit(:address, :house_type, :built, :sqft, :last_sold_date, :last_sold_price, :tax_assessment_year, :tax_assessment)
  end

end



