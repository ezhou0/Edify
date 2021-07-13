json.id @song.id
json.title @song.title
json.albumId @song.album_id
json.trackNumber @song.track_number
json.audio url_for(@song.audio)
json.artist @song.artist