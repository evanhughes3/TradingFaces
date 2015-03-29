class ContectPlayersToGameInsteadOfRound < ActiveRecord::Migration
  def change
    remove_column :players, :round_id
    add_column :players, :game_id, :integer
  end
end
