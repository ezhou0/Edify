class Album < ApplicationRecord
    # t.integer "artist_id", null: false
    
    validates :name, :year, :artist_id, :description, presence: true
     
    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

end
