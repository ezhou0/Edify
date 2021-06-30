json.artist do
    json.extract! @artist, :id, :name, :description
    json.photo url_for(@artist.artist_photo)
end

# json.albums @artist.albums

# json.albums do |album|
#     json.id album.id
#     json.name album.name
#     json.photo url_for(album.album_photo)
# end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :year, :artist_id, :description
            json.artist @artist
            json.name album.name
            json.photo url_for(album.album_photo)
        end
    end
end


