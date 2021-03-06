Rails.application.routes.draw do

  resources :teams
  get '/teams/:id/delete', to: 'teams#destroy'
  resources :comments
  resources :pokemons
  resources :sessions, only: [:create, :get, :update, :delete]
  resources :registrations, only: [:create]
  get '/logout', to: 'sessions#logout'
  get '/logged_in', to: 'sessions#logged_in'
  post '/login', to: 'sessions#login'
  resources :users do
    resources :teams
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  root to: "static#home"


end
