class PhotosController < ApplicationController


	def create
		data_url = params[:image_data]
		png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
		new_image = File.open("test_image.png", 'wb')
		new_image.write(png)
		response = Cloudinary::Uploader.upload(new_image.path)
		image_url = response["secure_url"]
		url = "https://apius.faceplusplus.com/v2/detection/detect?url=#{image_url}&api_secret=#{ENV['FACE_PLUS_SECRET']}&api_key=#{ENV['FACE_PLUS_KEY']}&attribute=glass,pose,gender,age,race,smiling"
		response = HTTParty.get(url)
		face_id = response['face'][0]['face_id']
		photo=Photo.create(img_url: image_url, face_id: face_id, user_id: 2, round_id: 1)
		render json: photo
	end


end