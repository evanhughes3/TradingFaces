class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.integer :user_id
      t.integer :round_id

      t.timestamps null: false
    end
  end
end
