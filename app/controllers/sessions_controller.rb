class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    # render :json => { user: user }
    redirect_to user_index_path
  end

  def destroy
    session.clear
    redirect_to root_url
  end
end
