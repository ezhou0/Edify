json.artist do
    json.extract! @artist, :id, :name
    json.popular do 
        @artist.songs.limit(5).each do |song|
            json.set! song.id do
                json.extract! song, :id, :title, :album_id
            end
        end
    end
end

json.albums do 
    @artist.albums.each do |album|
        artist = album.artist.name
        json.set! album.id do
            json.extract! album, :id, :name, :year, :artist
        end
    end
end