class PlayersGame < ActiveRecord::Base
  # Remember to create a migration!
  	belongs_to :games
  	belongs_to :players
end
