# OmniAuth.config.logger = Rails.logger

# Rails.application.config.session_store :cookie_store, key: 'tradingfaces'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
end
