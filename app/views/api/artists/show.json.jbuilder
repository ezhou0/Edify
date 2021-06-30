json.artist do
    json.extract! @artist, :id, :name, :description
    json.photo url_for(@artist.artist_photo)
end

json.albums @artist.albums
