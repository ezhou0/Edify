json.artist do
    json.extract! @artist, :id, :name, :description
    json.photo url_for(@artist.artist_photo) 
end

   
json.songs @artist.songs

json.albums do 
    json.array!(@artist.albums) do |album|
        json.extract! album, :id, :name, :year, :artist
        json.albumPhoto url_for(album.album_photo)
    end
end

# json.albums @artist.albums
# json.extract! @artist, :id, :name, :description
# json.photo url_for(@artist.artist_photo)  



# json.extract! @artist, :id, :name, :description
# json.albums @artist.albums
# json.songs @artist.songs

# json.(@artists) do |artist|
#     json.id artist.id
#     json.name artist.name
#     json.description artist.description
#     json.songs artist.songs
#     json.albums artist.albums
#     json.photo url_for(artist.artist_photo)
# end
