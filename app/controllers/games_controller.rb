class GamesController < ApplicationController

  def create
  	current_user = User.find(session[:user_id])
  	# competitor = ?
  	game = Game.create
  	round = current_user.rounds.create(game: game)
  	# rounds.players.create(user: competitor )
  	render json: {game: game, round: round}
  end

  def index
  	user = User.find(params[:user_id])
  	# games = Game.all.select { |game| game.users.pluck('id').include?(user.id) }
  	render json: games.to_json(include: :users, include: :rounds)
  end

end
