export const receiveArtists = () => {
    return $.ajax({
        url: `/api/artists/`,
        method: 'GET'
    });
}

export const receiveArtist = (artistId) => {
    return $.ajax({
        url: `/api/artists/${artistId}`,
        method: 'GET'
    });
}
