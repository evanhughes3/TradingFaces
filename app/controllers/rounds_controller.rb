class RoundsController < ApplicationController

  def compare
  	round = Round.find(params[:id])
  	photos = round.photos.pluck('face_id')
  	url = "https://apius.faceplusplus.com/v2/recognition/compare?api_secret=#{ENV['FACE_PLUS_SECRET']}&api_key=#{ENV['FACE_PLUS_KEY']}&face_id2=#{photos[1]}&face_id1=#{photos[0]}"
  	response = HTTParty.get(url)
  	p response['similarity']
  	render json: response
  end

end
