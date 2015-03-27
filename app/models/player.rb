class Player < ActiveRecord::Base
  belongs_to :user
  belongs_to :round

  validates :user_id, :round_id, presence: true

  # custom validation to prove that all user/round combinations are unique
end
