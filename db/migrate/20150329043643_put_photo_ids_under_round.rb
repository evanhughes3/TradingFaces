class PutPhotoIdsUnderRound < ActiveRecord::Migration
  def change
    add_column :rounds, :first_photo_id, :integer
    add_column :rounds, :second_photo_id, :integer
  end
end
