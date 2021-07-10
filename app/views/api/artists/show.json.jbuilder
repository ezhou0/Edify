json.artist do
    json.extract! @artist, :id, :name, :description
    json.songs do 
        @artist.songs.limit(5).each do |song|
            json.set! song.id do
                json.extract! song, :id, :album_id
                json.name song.title
                json.photo url_for(song.album.album_photo)
                json.audio url_for(song.audio.audio)
            end
        end
    end
    json.photo url_for(@artist.artist_photo)
end

json.albums @artist.albums


# json.albums do 
#     @artist.albums.each do |album|
#         json.set! album.id do
#             json.extract! album, :id, :year, :artist_id, :description
#             json.artist @artist
#             json.name album.name
#             json.photo url_for(album.album_photo)
#         end
#     end
# end


