class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    p "*" * 50
    p "User: #{user}"
    session[:user_id] = user.id
    redirect_to root_url
  end

  # def destroy
  #   session.clear
  #   redirect_to root_url
  # end
end
