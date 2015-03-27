class User < ActiveRecord::Base
  has_many :photos
  has_many :games, foreign_key: 'winner_id'
  has_many :players
  has_many :rounds, through: :players
end
