 @artists.each do |artist|
        name = artist.name.titleize
        json.set! artist.id do
            json.extract! artist, :id
            json.name name
            json.photo url_for(artist.artist_photo)
        end
end