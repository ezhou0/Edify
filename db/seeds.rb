# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

userBase = User.create(username: 'username', email: 'email.com', password: 'password', gender: 'Male' )
user1 = User.create(username: 'username1', email: 'email1.com', password: 'password1', gender: 'Female' )
user2 = User.create(username: 'username2', email: 'email2.com', password: 'password2', gender: 'Non-binary')


#artists
# artistBase = Artist.create!(name:'artistBase')
artist1 = Artist.create!(name: 'artist1', description: 'this is an artist')
artist2 = Artist.create!(name: 'artist2')

# artistBasepic = open("https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/artistbase.jpeg")
artist1pic = open("https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/catartist.jpeg")
artist2pic = open("https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/catpiano.jpeg")

# artistBase.artist_photo.attach(io: artistBasepic, filename: 'artistbase.jpeg')
artist1.artist_photo.attach(io: artist1pic, filename:'catartist.jpeg' )
artist2.artist_photo.attach(io: artist2pic, filename:'catpiano.jpeg' )


#albums

album1 = Album.create!(name: 'artist1 album', year: 2021, artist_id: artist1.id, description: '1st album for artist1')
album2 = Album.create!(name: 'artist1 2nd album', year: 2021, artist_id: artist1.id, description: '2nd album for artist1')
album3 = Album.create!(name: 'artist2 album', year: 2021, artist_id: artist2.id, description: '1st album for artist2')

#link album covers

album1pic = open('https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/catalbum1.jpeg')
album2pic = open('https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/catalbum2.png')
album3pic = open('https://edify-app-seeds.s3-us-west-1.amazonaws.com/Edifypics/catalbum3.jpeg')

# #
album1.album_photo.attach(io: album1pic, filename: 'catalbum1.jpeg')
album2.album_photo.attach(io: album2pic, filename: 'catalbum2.png')
album3.album_photo.attach(io: album3pic, filename: 'catalbum3.jpeg')

#songs
song1 = Song.create!(title: 'song1', album_id: album1.id, track_number: 1)
song2 = Song.create(title: 'song2', album_id: album1.id, track_number: 2)
song3 = Song.create(title: 'song3', album_id: album2.id, track_number: 1)
song4 = Song.create(title: 'song4', album_id: album2.id, track_number: 2)
song5 = Song.create(title: 'song5', album_id: album3.id, track_number: 1)
song6 = Song.create(title: 'song6', album_id: album3.id, track_number: 2)

#songs mp3
song1mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/dreams.mp3')
song2mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/goodmorning.mp3')
song3mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/kawaii.mp3')
song4mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/nimbus.mp3')
song5mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/places.mp3')
song6mp3 = open('https://edify-app-seeds.s3.us-west-1.amazonaws.com/edifySongs/summer.mp3')

# #
song1.audio.attach(io: song1mp3, filename: 'dreams.mp3')
song2.audio.attach(io: song2mp3, filename: 'goodmorning.mp3')
song3.audio.attach(io: song3mp3, filename: 'kawaii.mp3')
song4.audio.attach(io: song4mp3, filename: 'nimbus.mp3')
song5.audio.attach(io: song5mp3, filename: 'places.mp3')
song6.audio.attach(io: song6mp3, filename: 'summer.mp3')

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





