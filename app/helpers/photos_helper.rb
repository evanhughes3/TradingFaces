module PhotosHelper
	def create_image_file(image_data)
		png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
		new_image = File.open("test_image.png", 'wb')
		new_image.write(png)
		return new_image
	end

end
