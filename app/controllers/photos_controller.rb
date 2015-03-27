class PhotosController < ApplicationController


	def create
		new_image = File.new("test_image.png", 'wb')
		new_image.write(Base64.decode64(params[:image_data]))
		p new_image
	end


end
