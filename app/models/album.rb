class Album < ApplicationRecord
    
    validates :name, :year, :artist_id, :description, presence: true
     
    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :album_songs,
        foreign_key: :album_id,
        class_name: :Song
         
    has_one_attached :album_photo
end


