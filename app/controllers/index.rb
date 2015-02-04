enable :sessions

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/signup' do 
	Player.create(name: params[:name],password: params[:password])
	redirect to '/'

end

get '/login' do
	erb :login
end

post '/login' do
	player1 = Player.where(name: params[:p1_name],password: params[:p1_password]).first
	player2 = Player.where(name: params[:p2_name],password: params[:p2_password]).first
	session[:id_1] = player1.id
	session[:id_2] = player2.id

	if player1 != nil && player2 != nil 	
		game = Game.create(p1_id: player1.id,p2_id: player2.id,time_start: Time.now)
		session[:game] =  game.id
			redirect to '/game'
	else
			redirect to '/login'
	end
end

get '/game' do

	erb :game
end

post '/result' do
	@winner = params[:winner]
	{msg: @winner}.to_json
end

get '/result' do
	@winner = params[:winner]
	game_id = session[:game]
	@game = Game.find(session[:game])
	@game.update(time_end: Time.now)
	@time = @game.time_end - @game.time_start
  erb :result
end
