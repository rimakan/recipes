Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :recipes
    end
  end
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  patch '/user_profile', to: 'users#update'
  get '/user_profile', to: 'sessions#show'
  delete '/user_profile', to: 'users#destroy'
end
