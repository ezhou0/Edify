json.artist do
    json.extract! @artist, :id, :name, :description
    json.photo url_for(@artist.artist_photo)
    # json.songs do 
    #     @artist.songs.limit(5).each do |song|
            
    #             json.extract! song, :id, :album_id
    #             json.name song.title
    #             json.photo url_for(song.album.album_photo)
    #             json.audio url_for(song.audio)
            
    #     end
    # end
   
end

# json.albums @artist.albums
        
json.songs @artist.songs

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :year,:artist_id, :name, :description
            json.photoUrl url_for(album.photo)
        end
       
    end
end

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
