class Song < ApplicationRecord
    validates  :title, :album_id, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist

    has_many :song_playlists,
        foreign_key: :song_id,
        class_name: :playlist_songs

end
