class GamesController < ApplicationController

  def create
    puts "*" * 50
    puts "inside create!"
    puts params
    puts parse_opponent_id(params["opponent_class"])
  	# current_user = User.find(session[:user_id])
  	# # competitor = ?
  	# game = Game.create
  	# round = current_user.rounds.create(game: game)
  	# # rounds.players.create(user: competitor )
  	# render json: {game: game, round: round}
  end

  # def index
  # 	games = current_user.games
  # 	render json: games.to_json(include: :users)
  # end

  def current_games
		games = current_user.get_current_games
  	render json: games.to_json(include: :users)
  end

  def parse_opponent_id(user_class)
    user_class.split('_').last.to_i
  end

end
