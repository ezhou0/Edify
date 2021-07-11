json.artist do
    json.extract! @artist, :id, :name, :description
    json.photo url_for(@artist.artist_photo)
    json.songs do 
        @artist.songs.limit(5).each do |song|
            
                json.extract! song, :id, :album_id
                json.name song.title
                json.photo url_for(song.album.album_photo)
                json.audio url_for(song.audio)
            
        end
    end
   
end

json.albums @artist.albums


# json.albums do 
#     @artist.albums.each do |album|
       
#             json.extract! album, :id, :year, :artist_id, :description
#             json.artist @artist
#             json.name album.name
#             json.albumPhoto url_for(album.album_photo)
       
#     end
# end

# json.extract! @artist, :id, :name, :description
# json.albums @artist.albums
# json.songs @artist.songs
