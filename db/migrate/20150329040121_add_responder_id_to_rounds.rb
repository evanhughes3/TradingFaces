class AddResponderIdToRounds < ActiveRecord::Migration
  def change
    add_column :rounds, :responder_id, :integer
  end
end
