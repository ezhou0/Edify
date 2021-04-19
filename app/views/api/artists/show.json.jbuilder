json.artist do
    name = @artist.name.titleize
    json.extract! @artist, :id
    json.name name
    
end