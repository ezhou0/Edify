json.extract! @album, :id, :name, :artist_id, :year
json.id @album.id
json.albumName @album.name
json.artistId @album.artist_id
json.year @album.year
json.songs @songs
json.artist @album.artist