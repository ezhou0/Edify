json.search do   
    json.songs do 
        @songs.each do |song|
            title = song.title.titleize
            json.set! song.id do
                json.extract! song, :id, :album_id, :artist
                json.title title
            end
        end
    end

    json.albums do 
        @albums.each do |album|
            title = album.title.titleize
            json.set! album.id do
                json.extract! album, :id, :year, :artist
                json.name title 
            end
        end
    end

    json.artists do
        @artists.each do |artist|
            name = artist.name.titleize
            json.set! artist.id do 
                json.extract! artist, :id
                json.name name
            end
        end
    end
end