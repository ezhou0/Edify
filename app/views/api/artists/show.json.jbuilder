json.artist do
    name = @artist.name.titleize
    json.extract! @artist, :id
    json.name name
    json.photo url_for(@artist.artist_photo)
end

json.albums do 
    @artist.albums.each do |album|
        artist = album.artist.name.titleize
        title = album.name.titleize
        json.set! album.id do
            json.extract! album, :id, :year
            json.artist artist
            json.name title
        end
    end
end

