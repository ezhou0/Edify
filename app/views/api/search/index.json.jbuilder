json.songs do 
    json.array!(@songs) do |song|
        json.extract! song, :album_id, :title, :artist, :album
        
    end
end

json.albums do 
    json.array!(@albums) do |album|
        json.extract! album, :id, :name, :year, :artist
        json.albumPhoto url_for(album.album_photo)
    end
end

json.artists do
    json.array!(@artists) do |artist|
        if artist.name != 'artistBase'
         json.extract! artist, :id,:name
         json.artistPhoto url_for(artist.artist_photo)
        end
    end
end