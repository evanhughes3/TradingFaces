class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer :challenger_id
      t.integer :opponent_id
      t.integer :rating

      t.timestamps null: false
    end
  end
end
