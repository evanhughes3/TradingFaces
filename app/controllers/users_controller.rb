class UsersController < ApplicationController
	def index
		if current_user == nil
			redirect_to 'http://fuf.me:3000/users/login'
		else
			redirect_to root_path
		end
	end

  def show
  	user = User.find(session[:user_id])
  	render json: user
  end

end
