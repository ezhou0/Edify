class Playlist < ApplicationRecord
    validates :name, :author_id, presence: true

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
    
    has_many :playlist_songs,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong

    has_many :songs,
    through: :playlist_songs,
    source: :song


end
