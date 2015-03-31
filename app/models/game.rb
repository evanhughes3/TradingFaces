class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players
  has_many :users, through: :players

  def over?
  	self.players.pluck('winner').include?(true) ? true : false
  end

  def declare_winner
      users_ratings = self.rounds.pluck(:rating, :responder_id)

      user1_score = users_ratings[0][0]
      user2_score = users_ratings[1][0]

      responder1 = users_ratings[0][1]
      responder2 = users_ratings[1][1]


      if user1_score > user2_score
        player1 = Player.where(user_id: responder1, game_id: self.id).first
        player1.winner = true
        player1.save!
      else
        player2 = Player.where(user_id: responder2, game_id: self.id).first
        player2.winner = true
        player2.save!
      end
  end

  # def winner
  #   winner = self.players.select { |player| player.winner == true }
  #   return winner.first
  # end



  # self.players.each do |player|
  #   if player.user_id == current_user.id

  #   user1_score = ratings[0]
  #   user2_score = ratings[1]
  # end

end
