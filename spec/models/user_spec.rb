require 'rails_helper'

describe User do
  context 'validations' do
    it { should validate_presence_of :uid }
    it { should validate_uniqueness_of :uid }
    it { should validate_presence_of :oauth_token }
    it { should validate_uniqueness_of :oauth_token }

    # it 'should have a provider of Facebook' do
    #   user = FactoryGirl.create(:user_one)
    #   expect(user.provider).to eq 'Facebook'
    # end
  end

  context 'associations' do
    it { should have_many :photos }
    it { should have_many :games }
    it { should have_many :players }
    it { should have_many :rounds }
  end
end
