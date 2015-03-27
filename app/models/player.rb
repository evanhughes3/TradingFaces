class Player < ActiveRecord::Base
  belongs_to :user
  belongs_to :round

  validates :user_id, :round_id, presence: true
  validate unique_user_round_combination


  def unique_user_round_combination
    user = Player.find(user_id)
    round = Round.find(user_id)

    if user.rounds.include?(round)
      errors.add(:round_id, 'user cannot play twice in the same round')
    end
  end
end
