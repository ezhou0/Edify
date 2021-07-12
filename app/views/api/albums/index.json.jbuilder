@albums.each do |album|
    json.set! album.id do
        json.id album.id
        json.albumName album.name
        json.artistId album.artist_id
        json.albumPhoto url_for(album.album_photo)
        json.year album.year
        json.songs album.songs
        json.artist album.artist
    end
end