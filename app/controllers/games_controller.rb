class GamesController < ApplicationController

  def create
  	current_user = User.find(session[:user_id])
  	# competitor = ?
  	game = Game.create
  	round = current_user.rounds.create(game: game)
  	# rounds.players.create(user: competitor )
  	render json: {game: game, round: round}
  end

end
