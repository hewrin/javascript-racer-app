class CreatePlayersGames < ActiveRecord::Migration
  def change
  	create_table :players_games do |t|
  		t.integer :p1_id
  		t.integer :p2_id
  		t.integer :game_id
  	end
  end
end
