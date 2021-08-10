Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :artists, only: [:index, :show]

    resource :session, only: [:create,:destroy]
    resources :albums, only: [:show, :index] do
      resources :songs, only: [:index]
    end
    resources :songs, only: [:show]
    resources :playlists, only: [:show, :index, :create, :destroy, :update]
    resources :playlist_songs, only: [:create, :destroy]
    resources :search, only: [:index]

  end
end
