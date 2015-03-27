class Photo < ActiveRecord::Base
  belongs_to :user
  belongs_to :round

  validates :img_url, presence: true
  validates :img_url, uniqueness: true

  # custom validation: it can only be created if there's only 0 or 1 photos with the same round_id
end
