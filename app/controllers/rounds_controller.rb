class RoundsController < ApplicationController

	def create
		game = Game.find(params[:game_id])
		current_user = session[:user_id]
		# competitor = ?
		round = current_user.rounds.create(game: game)
		# round.players.create(user: competitor)
  	render json: {game: game, round: round}
	end

	def index
		user = User.find(params[:user_id])
		rounds = user.rounds
		render json: rounds
	end

end
