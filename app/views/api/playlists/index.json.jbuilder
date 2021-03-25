json.extract! @playlist, :id, :name
json.songs do 
    @songs.each do |song|
        title = song.song.title.titleize
        json.set! song.id do
            json.extract! song.song, :id, :album_id, :artist
            json.sapId song.id
            json.title title
        end
    end
end