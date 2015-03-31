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

  def check_status
  	current_user == nil ? redirect_to("/login") : redirect_to("/user")
  end
end
