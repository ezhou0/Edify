export const fetchAlbum = (albumId) => {
    return $.ajax({
        url: `api/albums/${albumId}`,
        method: 'GET'
    })
}

export const receiveAlbums = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/albums',
    })
};