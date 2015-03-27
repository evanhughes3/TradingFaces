# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: 'bobbyrightback',
  name: 'Bob',
  photo_url: 'www.stubbed.com'
)

User.create(
  username: 'RachelProfiling',
  name: 'Rachel',
  photo_url: 'www.stubbed.com'
)

Player.create(
  user_id: 1,
  round_id: 1
)

Player.create(
  user_id: 2,
  round_id: 1
)


Player.create(
  user_id: 1,
  round_id: 2
)

Player.create(
  user_id: 2,
  round_id: 2
)

Round.create(
  game_id: 1,
  rating: 4
)

Round.create(
  game_id: 1,
  rating: 5
)

Game.create(
  winner_id: 1
)