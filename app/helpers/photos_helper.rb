module PhotosHelper

  def compare(round_id)
		round = Round.find(round_id)
		photos = round.photos.pluck('face_id')
		url = "https://apius.faceplusplus.com/v2/recognition/compare?api_secret=#{ENV['FACE_PLUS_SECRET']}&api_key=#{ENV['FACE_PLUS_KEY']}&face_id2=#{photos[1]}&face_id1=#{photos[0]}"
		response = HTTParty.get(url)
		rating = response['similarity'].round
		return rating
 	end

end
