class User < ActiveRecord::Base
  has_many :photos
  has_many :rounds
  has_many :games
end
