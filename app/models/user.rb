class User < ActiveRecord::Base
  has_many :photos
  has_many :games, foreign_key: 'winner_id'
  has_many :players
  has_many :rounds, through: :players

  validates :username, presence: true
  validates :username, uniqueness: true

  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.creditnials.oauth_token
      user.save!
    end
  end
end
