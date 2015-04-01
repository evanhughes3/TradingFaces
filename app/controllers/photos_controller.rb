class PhotosController < ApplicationController

	def create
		round = Round.find(params[:round_id])
		photo = Photo.create_new_photo(params[:image_data], round, current_user )
		game = round.game
		if round.photos.length == 2
			round.compare_photos
			if game.rounds.length == 2
				game.declare_winner
				render json: {finished_game: true}
			else
				opponent_id = game.players.pluck('user_id').select { |id| id != current_user.id }
				game.rounds.create(responder_id: opponent_id[0] )
				render json: {round: round, finished_round: true}
			end
		else
			render json: {photo: photo, finished_round: false}
		end
	end


end
