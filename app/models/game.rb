class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players
  has_many :users, through: :players

  def over?
  	self.players.pluck('winner').include?(true) ? true : false
  end

  def declare_winner
    if self.over?
      users_ratings = self.rounds.pluck(:rating, :responder_id)
      # [[94, 2], [99, 2]]
      user1_score = users_ratings[0][0]
      user2_score = users_ratings[1][0]

      user1 = users_ratings[0][1]
      user2 = users_ratings[1][1]

      if user1_score > user2_score
        player1 = Player.where(user_id: user1, game_id: self.id).first
        player1.winner = true
        player1.save
        p 'PLAYER 1 WINS'
        return player1
      else
        player2 = Player.where(user_id: user2, game_id: self.id).first
        player2.winner = true
        player2.save
        p 'PLAYER 2 WINS'
        return player2
      end
    else
      p "game is not over yet"
    end
  end



  # self.players.each do |player|
  #   if player.user_id == current_user.id

  #   user1_score = ratings[0]
  #   user2_score = ratings[1]
  # end

end
