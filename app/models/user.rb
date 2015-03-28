class User < ActiveRecord::Base
  has_many :photos
  has_many :games, foreign_key: 'winner_id'
  has_many :players
  has_many :rounds, through: :players

  validates :uid, :oauth_token, presence: true
  validates :uid, :oauth_token, uniqueness: true
  validate :provider_must_be_facebook

  def self.from_omniauth(auth)
    p auth
    user = User.find_or_initialize_by(uid: auth.uid)
    # user.uid = auth.uid.to_i
    user.full_name = auth.info.name
    user.email = auth.info.email
    user.oauth_token = auth.credentials.token
    user.photo_url = auth.info.image
    user.provider = 'facebook'
    user.save!

    return user
  end

  def provider_must_be_facebook
    if provider != 'facebook'
      errors.add(:provider, 'provider must be facebook')
    end
  end
end
