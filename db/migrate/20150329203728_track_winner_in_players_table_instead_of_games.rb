class TrackWinnerInPlayersTableInsteadOfGames < ActiveRecord::Migration
  def change
    remove_column :games, :winner_id
    add_column :players, :winner, :boolean, default: false
  end
end
