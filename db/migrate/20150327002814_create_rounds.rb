class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer :challenger_id
      t.integer :opponent_id
      t.integer :game_id
      t.integer :rating, default: 0

      t.timestamps null: false
    end
  end
end
