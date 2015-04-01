class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to '/'
  end

  def destroy
    session.clear
    redirect_to "#{ENV['HOSTNAME']}/login"
  end

  def current_user
  	user_id = session[:user_id]
  	p user_id
  	render json: user_id
  end

  def check_status
  	if session[:user_id] == nil
  	 redirect_to("/login")
	 	else
	 	 redirect_to("/user")
	 	end
  end
end
