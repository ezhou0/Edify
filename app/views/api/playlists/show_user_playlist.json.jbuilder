json.playlist do 
    @playlists.each do |playlist|
        songs = playlist.playlist_song
        json.set! playlist.id do
            json.extract! playlist, :title, :id
            json.songs do 
                songs.each do |song|
                    title = song.song.title.titleize
                    json.set! song.id  do
                        json.extract! song.song, :artist, :album
                        json.title title
                    end
                end
            end
        end
    end
end