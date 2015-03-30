class GamesController < ApplicationController

  def create
    opponent_id = parse_opponent_id(params["opponent_class"])
  	opponent = User.find(opponent_id)

  	game = Game.create
    game.players.create(game: game, user: current_user)
    game.players.create(game: game, user: opponent)

  	round = current_user.rounds.create(game: game)

  	render json: {game: game, round: round}
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
