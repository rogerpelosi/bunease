require 'rails_helper'

RSpec.describe "Api::Uploads", type: :request do
  describe "GET /prepare" do
    it "returns http success" do
      get "/api/uploads/prepare"
      expect(response).to have_http_status(:success)
    end
  end

end
