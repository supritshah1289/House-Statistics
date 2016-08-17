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



end



