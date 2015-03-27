class Photo < ActiveRecord::Base
  belongs_to :user
  belongs_to :round

  validates :img_url, :user_id, :round_id, presence: true
  validates :img_url, uniqueness: true
end
