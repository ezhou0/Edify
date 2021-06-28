json.extract! @album, :id, :name, :artist_id, :year
json.id @album.id
json.albumName @album.name
json.artistId @album.artist_id
json.year @album.year
json.photo url_for(@album.album_photo)
json.songs @songs
json.artist @album.artist