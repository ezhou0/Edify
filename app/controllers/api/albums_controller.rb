class Api::AlbumsController < ApplicationController
     def show
        @album = Album.find(params[:id])
        render :show
    end

    def index
        @albums = Album.all
        render :index
    end
end
