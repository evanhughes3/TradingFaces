class PhotosController < ApplicationController


	def create
		data_url = params[:image_data]
		png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
		new_image = File.open("test_image.png", 'wb') { |f| f.write(png) }
	end


end
