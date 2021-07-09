class Api::PlaylistSongsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
       @playlist_song = PlaylistSong.new(playlist_song_params)
        @playlist_song.save!
    end

    def destroy
        @playlist_song = PlaylistSong.find_by(song_id: params[:playlist_song][:song_id], playlist_id: params[:playlist_song][:playlist_id])
        @playlist_song.destroy!
        @playlist = Playlist.find(params[:playlist_song][:playlist_id])
        render 'api/playlists/show'
    end
    
    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
