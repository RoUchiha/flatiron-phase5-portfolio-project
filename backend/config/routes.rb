Rails.application.routes.draw do
  resources :teams
  resources :comments
  resources :pokemons
  resources :users do
    resources :teams
  end
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in'
  get 'current_user', to: 'sessions#current'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
