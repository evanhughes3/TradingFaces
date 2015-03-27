class Game < ActiveRecord::Base
  has_many :rounds
  belongs_to :winner
end
