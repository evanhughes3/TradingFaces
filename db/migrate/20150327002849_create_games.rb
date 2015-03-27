class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :round_one_id
      t.integer :round_two_id
      t.integer :winner_id

      t.timestamps null: false
    end
  end
end
