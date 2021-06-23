class Api::PlaylistsController < ApplicationController
   def index
        user = current_user
        @playlists = user.playlists
        render 'api/playlists/index'
    end

    def show
        @playlist = Playlist.find(params[:id])
        render 'api/playlists/show'
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render 'api/playlists/show'
        end
    end

    def update
        @playlist = Playlist.find(params[:id])

        if @playlist.update(playlist_params)
            render 'api/playlists/show'
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        if @playlist.destroy
            render :show
        end
    end


    private

    def playlist_params
        params.require(:playlist).permit(:title, :author_id)
    end
end
