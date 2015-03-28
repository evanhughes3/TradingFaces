class UsersController < ApplicationController
  
  def index
  	user = User.find(session[:user_id])
  	render json: user
  end

end
