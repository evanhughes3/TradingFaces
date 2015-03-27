class Game < ActiveRecord::Base
  has_many :rounds
  belongs_to :winner, class_name: 'User'
end
