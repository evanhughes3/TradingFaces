FactoryGirl.define do
  factory :photo_user_1_round_1 do
    img_url # need to get a valid img url
    face_id # need to get a valid face_id
    user_id 1
    round_id 1
  end

  factory :photo_user_2_round_1 do
    img_url # need to get a valid img url
    face_id # need to get a valid face_id
    user_id 2
    round_id 1
  end

  factory :photo_user_1_round_2 do
    img_url # need to get a valid img url
    face_id # need to get a valid face_id
    user_id 1
    round_id 2
  end

  factory :photo_user_2_round_2 do
    img_url # need to get a valid img url
    face_id # need to get a valid face_id
    user_id 2
    round_id 2
  end
end