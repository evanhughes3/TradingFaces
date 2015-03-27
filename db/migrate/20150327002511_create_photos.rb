class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :img_url
      t.string :face_id
      t.integer :user_id
      t.integer :round_id

      t.timestamps null: false
    end
  end
end
