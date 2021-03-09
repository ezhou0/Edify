export const fetchAlbum = (albumId) => {
    return $.ajax({
        url: `api/albums/${albumId}`,
        method: 'GET'
    })
}