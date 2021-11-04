Rails.application.routes.draw do
  
  namespace :api do 

    resources :comments, only: [:create, :index]

    resources :posts, only: [:create, :index, :show]

    resources :users, only: [:update]

    get '/me', to: 'users#show'

    post '/signup', to: 'users#create'

    post '/login', to: 'sessions#create'

    delete '/logout', to: 'sessions#destroy'

  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
