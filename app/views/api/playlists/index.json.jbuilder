@playlists.each do |playlist|
    json.set! playlist.id do 
        json.id playlist.id
        json.name playlist.name
        json.author playlist.author_id
        json.songs playlist.songs
    end
end