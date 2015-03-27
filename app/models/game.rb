class Game < ActiveRecord::Base
  has_many :rounds
  belongs_to :winner, class_name: 'User'

  validates :winner_id, absence: true
end
