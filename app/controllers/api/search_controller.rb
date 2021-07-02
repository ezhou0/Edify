class Api::SearchController < ApplicationController
    def index
        @songs = Song.where("title ILIKE ?", "%" + params[:search] + "%")
        @albums = Album.where("name ILIKE ?", "%" + params[:search] + "%")
        @artists = Artist.where("name ILIKE ?", "%" + params[:search] + "%")
    end
end
