class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(ENV['onmiauth.auth'])
    session[:user_id] = user.id
    redirect_to root_url
  end

  def destroy
    session.clear
    redirect_to root_url
  end
end
