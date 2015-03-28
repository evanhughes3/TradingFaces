class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    # redirect_to root_url
    render :json => { user: user }
  end

  def destroy
    session.clear
    redirect_to root_url
  end
end
