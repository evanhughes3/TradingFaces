class Round < ActiveRecord::Base
  belongs_to :game
  has_many :photos
  belongs_to :responder, class_name: 'User'

  validates :game_id, :rating, presence: true
  validates :rating, numericality: { only_integer: true, less_than_or_equal_to: 100 }

  # custom validation: it can only be created if there's 0 or 1 other rounds with the same game_id
  def compare_photos
		photos = self.photos.pluck('face_id')
		url = "https://apius.faceplusplus.com/v2/recognition/compare?api_secret=#{ENV['FACE_PLUS_SECRET']}&api_key=#{ENV['FACE_PLUS_KEY']}&face_id2=#{photos[1]}&face_id1=#{photos[0]}"
		response = HTTParty.get(url)
		rating = response['similarity'].round
		self.update_attributes(rating: rating)
  end

end
