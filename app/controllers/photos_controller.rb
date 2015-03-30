class PhotosController < ApplicationController

	def create
		round = Round.find(params[:round_id])
		photo = Photo.create_new_photo(params[:image_data], round, current_user )
		if round.photos.length == 2
			round.compare_photos
			game = round.game
			opponent_id = game.players.pluck('user_id').select { |id| id != current_user.id }
			game.rounds.create(responder_id: opponent_id[0] )
			render json: {round: round, finished_round: true}
		else
			render json: {photo: photo, finished_round: false}
		end
	end


end
