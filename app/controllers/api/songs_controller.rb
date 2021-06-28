
class Api::SongsController < ApplicationController
    def index
        if params[:album_id] == "browse"
            @songs = Song.all
        else
            album = Album.find(params[:album_id])
            @songs = album.album_songs
        end
        render :index
    end

    def show
        @song = Song.find(params[:id])
        render :show
    end
end