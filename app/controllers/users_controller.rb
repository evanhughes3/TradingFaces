class UsersController < ApplicationController

  def show
  	user = User.find(session[:user_id])
  	render json: user
  end

  def friends
    user = current_user
    friends = user.friends
    render json: friends
  end

end
