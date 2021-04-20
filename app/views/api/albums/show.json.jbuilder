json.album do
    title = @album.title.titleize
    json.extract! @album, :id, :artist_id, :year
    json.title title
end

json.artist do 
    name = @album.artist.name.titleize
    json.set! @album.artist.id do
        json.extract! @album.artist, :id
        json.name name
    end
end