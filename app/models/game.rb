class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players
  has_many :users, through: :players
  belongs_to :winner, class_name: 'User'

  def over?
  	return self.players.pluck('winner').include?(true) ? true : false
  end

end
