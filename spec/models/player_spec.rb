require 'rails_helper'

describe Player do
  describe 'validations' do
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :round_id }
  end

  describe 'custom validations' do

    it 'should validate unique user & round combinations' do

    end
  end

  describe 'associations' do
    it { should belong_to :user }
    it { should belong_to :round }
  end
end