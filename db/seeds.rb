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

#albums

album1 = Album.create!(name: 'artist1 album' year: 2021, artist_id: artist1.id, description: '1st album for artist1')
album2 = Album.create!(name: 'artist1 2nd album' year: 2021, artist_id: artist1.id, description: '2nd album for artist1')
album3 = Album.create!(name: 'artist2 album' year: 2021, artist_id: artist2.id, description: '1st album for artist2')

#TODO add album covers


