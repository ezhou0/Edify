json.album do
    title = @album.name.titleize
    json.extract! @album, :id, :artist_id, :year
    json.name title
end

json.artist do 
    name = @album.artist.name.titleize
    json.set! @album.artist.id do
        json.extract! @album.artist, :id
        json.name name
    end
end

json.songs @songs

# json.songs do 
#     artist = @album.artist
#     @album.album_songs.each do |song|
#         title = song.title.titleize
#         json.set! song.id do
#             json.extract! song, :id, :album_id
#             json.title title
#         end
#     end
# end