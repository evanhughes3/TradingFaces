class User < ActiveRecord::Base
  has_many :photos
  has_many :players
  has_many :games, through: :players
  has_many :rounds, foreign_key: 'responder_id'
  has_many :friendships
  has_many :friends, through: :friendships

  validates :uid, :oauth_token, presence: true
  validates :uid, :oauth_token, uniqueness: true
  validate :provider_must_be_facebook

  def self.from_omniauth(auth)
    @user = User.find_or_initialize_by(uid: auth.uid)
    @user.full_name = auth.info.name
    @user.email = auth.info.email
    @user.oauth_token = auth.credentials.token
    @user.photo_url = auth.info.image + '?height=350&width=250' #put in variable for safety
    @user.provider = 'facebook'
    @user.save!

    # friends who also play the game
    results = self.get_friends_data_from_omniauth
    self.create_friendships(results["data"])

    return @user
  end

  def get_users_won_games
    players_where_winning = current_user.players.where(winner: true)
    winning_games = players_where_winning.map do |player|
      player.game
    end

    return winning_games
  end

  private

  def provider_must_be_facebook
    if provider != 'facebook'
      errors.add(:provider, 'provider must be facebook')
    end
  end

  def self.get_friends_data_from_omniauth
    HTTParty.get("https://graph.facebook.com/v2.3/#{@user.uid}/friends?access_token=#{@user.oauth_token}")
  end

  def self.create_friendships(friends_data)
    friends_data.each do |friend_data|
      uid = friend_data["id"].to_i
      friend = User.find_by(uid: uid)
      next if friend.nil?
      Friendship.find_or_create_by(user_id: @user.id, friend_id: friend.id)
    end
  end
end
