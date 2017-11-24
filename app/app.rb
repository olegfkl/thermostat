require 'sinatra/base'
require 'json'


class App < Sinatra::Base
  enable :sessions

  get '/' do
    erb(:index)
  end
get '/update' do
  content_type :json
  { temperature: session[:temperature]}.to_json 

end


  post '/save' do
    p params
  session[:temperature] = params[:temperature]
  session[:powermode] = params[:powermode]
  session[:city] = params[:city]
  200
end

   run! if app_file == $0
  end
