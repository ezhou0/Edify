json.(@artists) do |artist|
    json.id artist.id
    json.name artist.name
    json.description artist.description
    json.songs artist.songs
    json.albums artist.albums
    json.photo url_for(artist.artist_photo)
end