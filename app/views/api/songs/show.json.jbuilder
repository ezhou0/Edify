json.id @song.id
json.name @song.title
json.albumId @song.album_id
json.trackNumber @song.track_number
json.audioUrl url_for(@song.audio)
json.artist @song.artist