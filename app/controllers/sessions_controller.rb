class SessionsController < ApplicationController
  # def login
  #   puts 'inside login'
  # end

  # def new
  #   # should direct user to login
  #   puts 'inside new'
  # end

  # before do
  #   @client_id = ENV['FACEBOOK_ID']
  #   @client_secret = ENV['FACEBOOK_SECRET']
  #   @host = ENV['HOST']

  #   session[:oauth] ||= {}
  # end

  def create
    p email = env['omniauth.auth']['info']['email']
    p uid = env['omniauth.auth']['uid']
    p full_name = env['omniauth.auth']['info']['name']
    p fbook_profile_pic = env['omniauth.auth']['info']['image']
    p fbook_token = env['omniauth.auth']['credentials']['token']
    p "inside create"
    # @user = User.find_or_create_from_auth_hash(auth_hash)
    # self.current_user = @user
    # # redirect_to root_url
    # p ENV['omniauth.auth']
    # user = User.from_omniauth(ENV['omniauth.auth'])
    # session[:user_id] = user.id
    redirect_to root_url
  end

  # def destroy
  #   session.clear
  #   redirect_to root_url
  # end

  # protected

  # def auth_hash
    # request.env['omniauth.auth']
  # end






end
