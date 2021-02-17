json.album do
    json.extract! @album, :id, :name, :artist_id, :year
end

json.artist do 
    json.set! @album.artist.id do
        json.extract! @album.artist, :id, :name
    end
end