require 'rails_helper'

describe User do
  context 'validations' do
    it { should validate_presence_of :username }
    it { should validate_uniqueness_of :username }
  end

  context 'associations' do
    it { should have_many :photos }
    it { should have_many :games }
    it { should have_many :players }
    it { should have_many :rounds }
  end
end