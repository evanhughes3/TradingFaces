FactoryGirl.define do
  factory :user_one do
    name 'Bob'
    uid 123456
    oauth_token 'abc123'
    provider 'Facebook'
    photo_url 'https://s-media-cache-ak0.pinimg.com/236x/c0/c3/ed/c0c3ed2127e5c3230cb5e6ba15ad3c0d.jpg'
  end

  factory :user_two do
    name 'Andrew'
    provider 'Facebook'
    uid 234567
    oauth_token 'bcd234'
    photo_url 'http://www.farandulista.com/wp-content/uploads/2011/01/Rachel-haircut.jpg'
  end
end
