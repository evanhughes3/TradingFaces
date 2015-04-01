class RemoveRoundIdFromPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :round_id, :integer
  end
end
