class Round < ActiveRecord::Base
  belongs_to :game
  has_many :photos
  has_many :players
  has_many :users, through: :players

  validates :game_id, :rating, presence: true
  validates :rating, numericality: { only_integer: true, less_than_or_equal_to: 5 }

  # custom validation: it can only be created if there's 0 or 1 other rounds with the same game_id
end
