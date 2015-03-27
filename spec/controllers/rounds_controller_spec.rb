require 'rails_helper'

RSpec.describe RoundsController, type: :controller do

  describe "GET #compare" do
    it "returns http success" do
      get :compare
      expect(response).to have_http_status(:success)
    end
  end

end
