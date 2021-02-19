export const fetchArtists = () => {
    return $.ajax({
        url: `/api/artists/`,
        method: 'GET'
    });
}

export const fetchArtist = (artistId) => {
    return $.ajax({
        url: `/api/artists/${artistId}`,
        method: 'GET'
    });
}
