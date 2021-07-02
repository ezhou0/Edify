json.songs do 
    json.array!(@songs) do |song|
        json.extract! song, :album_id, :title
    end
end

json.albums do 
    json.array!(@albums) do |album|
        json.extract! album, :id, :name, :year, :artist
    end
end

json.artists do
    json.array!(@artists) do |artist|
        if artist.name != 'artistBase'
         json.extract! artist, :id,:name
        end
    end
end