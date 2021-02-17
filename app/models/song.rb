class Song < ApplicationRecord
    validates  :title, presence: true
    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

end
