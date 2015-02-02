class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.integer :p1_id
  		t.integer :p2_id
  		t.time    :time_start 
  		t.time    :time_end
  	end
  end
end
