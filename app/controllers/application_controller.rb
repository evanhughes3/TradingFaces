class ApplicationController < ActionController::API
  include ::ActionController::Cookies
	include ::ActionController::Helpers

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user
end
