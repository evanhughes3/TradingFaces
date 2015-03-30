class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players
  has_many :users, through: :players

  def over?
  	self.players.pluck('winner').include?(true) ? true : false
  end

end
