class Photo < ActiveRecord::Base
  belongs_to :user
  belongs_to :round

  validates :img_url, :user_id, :round_id, :face_id, presence: true
  validates :img_url, uniqueness: true

  # custom validation: it can only be created if there's only 0 or 1 photos with the same round_id

  def self.create_new_photo(image_data, round, current_user)
  	data_url = image_data
  	png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
  	new_image = File.open("test_image.png", 'wb')
  	new_image.write(png)
  	response = Cloudinary::Uploader.upload(new_image.path)
  	image_url = response["secure_url"]
  	url = "https://apius.faceplusplus.com/v2/detection/detect?url=#{image_url}&api_secret=#{ENV['FACE_PLUS_SECRET']}&api_key=#{ENV['FACE_PLUS_KEY']}&attribute=glass,pose,gender,age,race,smiling"
  	response = HTTParty.get(url)
  	p response
  	face_id = response['face'][0]['face_id'] unless response['face'].empty?
  	photo = round.photos.create(img_url: image_url, face_id: face_id, user_id: current_user.id)
		return photo
  end
end
