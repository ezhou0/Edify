json.(@songs) do |song|
    json.id song.id
    json.title song.title
    json.albumId song.album_id
    json.artist song.artist
end