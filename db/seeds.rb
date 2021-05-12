# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

userBase = User.create(username: 'username', email: 'email.com', password: 'password', gender: 'Male' )
user1 = User.create(username: 'username1', email: 'email1.com', password: 'password1', gender: 'Female' )
user2 = User.create(username: 'username2', email: 'email2.com', password: 'password2', gender: 'Non-binary')


#artists
artist1 = Artist.create!(name: 'artist1', description: 'this is an artist')
artist2 = Artist.create!(name: 'artist2')

#TODOlink artist picture and attach photo
artist1pic = open()
artist2pic = open()

#albums

album1 = Album.create!(name: 'artist1 album', year: 2021, artist_id: artist1.id, description: '1st album for artist1')
album2 = Album.create!(name: 'artist1 2nd album', year: 2021, artist_id: artist1.id, description: '2nd album for artist1')
album3 = Album.create!(name: 'artist2 album', year: 2021, artist_id: artist2.id, description: '1st album for artist2')

#TODO add album covers

#songs
song1 = Song.create!(title: 'song1', album_id: album1.id)
song2 = Song.create(title: 'song2', album_id: album1.id)
song3 = Song.create(title: 'song3', album_id: album2.id)
song4 = Song.create(title: 'song4', album_id: album2.id)
song5 = Song.create(title: 'song5', album_id: album3.id)
song6 = Song.create(title: 'song6', album_id: album3.id)

#TODO add song mp3

#playlists
playlist1 = Playlist.create!(name: 'first playlist', author_id: userBase.id)
playlist2 = Playlist.create!(name: 'second playlist', author_id: userBase.id)

#playlist songs

ps1 = PlaylistSong.create!(song_id: song1.id, playlist_id: playlist1.id)
ps2 = PlaylistSong.create!(song_id: song2.id, playlist_id: playlist1.id)
ps3 = PlaylistSong.create!(song_id: song3.id, playlist_id: playlist1.id)
ps4 = PlaylistSong.create!(song_id: song4.id, playlist_id: playlist2.id)
ps5 = PlaylistSong.create!(song_id: song5.id, playlist_id: playlist2.id)
ps6 = PlaylistSong.create!(song_id: song6.id, playlist_id: playlist2.id)





