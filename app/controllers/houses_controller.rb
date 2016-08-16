class HousesController < ApplicationController

  def new
    # keywords = params[:keywords]
    # puts params
    # api_key = ENV['api_key']

     url = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19m4sjxwsgb_2m43a&address=81+Oakland+Ave&citystatezip=Jersey%20city%2C+NJ"
    response = HTTParty.get(url)
    parsed_body = Crack::XML.parse(response.body)
    # puts parsed_body.to_json
    render json: parsed_body
    @house = parsed_body.to_json
  end



end



