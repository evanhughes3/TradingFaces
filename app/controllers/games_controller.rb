class GamesController < ApplicationController

  def create
    opponent_id = parse_opponent_id(params["opponent_class"])
  	opponent = User.find(opponent_id)

  	game = Game.create
    game.players.create(game: game, user: current_user)
    game.players.create(game: game, user: opponent)

  	round = opponent.rounds.create(game: game)

  	render json: {game: game, round: round}
  end

  def current_games
		games = current_user.get_current_games
  	render json: games, only: :id, :include => [{:users => {only: [:id, :full_name, :photo_url]}},
  																							{:rounds => {only: [:id, :rating], :include => [{:responder => {only: [:id, :full_name, :photo_url]}} , :photos]}},]
  end

  def finished_games
    games = current_user.get_finished_games
    render json: games, only: :id, :include => [{:users => {only: [:id, :full_name, :photo_url]}},
                                                {:rounds => {only: [:id, :rating], :include => [{:responder => {only: [:id, :full_name, :photo_url]}} , :photos]}},]
  end

  def parse_opponent_id(user_class)
    user_class.split('_').last.to_i
  end

end
