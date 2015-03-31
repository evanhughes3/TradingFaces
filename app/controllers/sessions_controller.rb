class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to users_index_path
  end

  def destroy
    session.clear
    redirect_to "#{ENV['HOSTNAME']}/login"
  end
end
