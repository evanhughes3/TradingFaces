# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Player.create(
  user_id: 1,
  game_id: 1
)

Player.create(
  user_id: 2,
  game_id: 1
)

Round.create(
  game_id: 1,
  rating: 4,
  responder_id: 2
)

Round.create(
  game_id: 1,
  rating: 5,
  responder_id: 1
)

Game.create(
  winner_id: 1
)

Photo.create(
  img_url: 'http://static.giantbomb.com/uploads/original/1/17172/1419618-unicorn2.jpg',
  face_id: '1234',
  user_id: 1,
  round_id: 1
)

Photo.create(
  img_url: 'http://www.mermaidsrock.net/uni61.jpg',
  face_id: '2345',
  user_id: 2,
  round_id: 1
)

Photo.create(
  img_url: 'https://lilymichaud.files.wordpress.com/2007/09/unicorns_csg010.jpg',
  face_id: '3456',
  user_id: 2,
  round_id: 2
)

Photo.create(
  img_url: 'http://www.slacktory.com/wp-content/uploads/2012/05/Obama-on-a-unicorn-1.jpg',
  face_id: '4567',
  user_id: 1,
  round_id: 2
)
