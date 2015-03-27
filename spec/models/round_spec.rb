require 'rails_helper'

describe Round do
  context 'standard validations' do
    it { should validate_presence_of :game_id }
    it { should validate_presence_of :rating }
    it { should validate_numericality_of(:rating).is_less_than_or_equal_to 5 }
  end

  context 'associations' do
    it { should belong_to :game }
    it { should have_many :photos }
    it { should have_many :players }
    it { should have_many :users }
  end
end