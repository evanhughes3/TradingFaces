require 'rails_helper'

describe Game do
  context 'validations' do
    it { should validate_absence_of :winner_id }
  end

  context 'associations' do
    it { should have_many :rounds }
    it { should belong_to :winner }
  end
end