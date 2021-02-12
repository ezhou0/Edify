# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

userBase = User.create(username: 'username', email: 'email.com', password: 'password', gender: 'Male', birth_date: '2000-01-01' )
user1 = User.create(username: 'username1', email: 'email1.com', password: 'password1', gender: 'Female', birth_date: '2000-01-01' )
user2 = User.create(username: 'username2', email: 'email2.com', password: 'password2', gender: 'Non-binary', birth_date: '2000-01-01' )