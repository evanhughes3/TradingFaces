class Round < ActiveRecord::Base
  belongs_to :game
  has_many :photos
  has_many :players
  has_many :users, through: :players
end
