class Round < ActiveRecord::Base
  belongs_to :challenger, # user
  belongs_to :opponent, #user
  belongs_to :game
  has_many :photos
end
