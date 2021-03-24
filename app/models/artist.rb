class Artist < ApplicationRecord
     validates :name, presence: true, uniqueness: true

       has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :songs,
        through: :albums,
        source: :album_songs

    has_one_attached :artist_photo
end
