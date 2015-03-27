require 'rails_helper'

describe Photo do
  context "validations" do
    it { should validate_presence_of :img_url }
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :round_id }

    it { should validate_uniqueness_of :img_url }
  end

  context "associations" do
    it { should belong_to :user }
    it { should belong_to :round }
  end
end