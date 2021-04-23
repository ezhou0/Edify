class Api::SearchesController < ApplicationController
    def search
        search_term = params[:search]
        @songs = Song.where("title LIKE ?", "%#{search_term}%")
        @albums = Album.where("name LIKE ?", "%#{search_term}%")
        @artists = Artist.where("name LIKE ?", "%#{search_term}%")
    end

    def all
        @songs = Song.all
        @albums = Album.all
        @artists = Artist.all
        render :search
    end
end
