Rails.application.routes.draw do
  
  namespace :api do 

    resources :chums

    resources :comments, only: [:create, :index, :show]

    resources :posts, only: [:create, :index, :show]

    resources :users, only: [:update, :index, :show]

    get '/me', to: 'users#me'
    post '/signup', to: 'users#create'
    post '/users/:id/follow', to: "users#follow"
    delete '/users/:id/unfollow', to: "users#unfollow"

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post 'uploads/prepare'

  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
