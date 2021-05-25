Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resources :artists, only: [:index, :show]

    resource :session, only: [:create,:destroy]
    resources :albums, only: [:show]
    resources :playlists, only: [:show, :create, :destroy, :update]
    resources :playlist_songs, only: [:create, :destroy]
  #  resources :songs, only: [:show, :index]

    get '/searches/:search', to: 'searches#search', as: 'search_term'
    get '/searches_all/', to: 'searches#all', as: 'search_all'  
  end
end
