class Song < ApplicationRecord
    validates  :title, :album_id, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist

    has_many :songs_on_playlists,
        foreign_key: :song_id,
        class_name: :PlaylistSong
    
    has_many :playlists,
        through: :songs_on_playlists,
        source: :playlist

    has_one_attached :audio

end
