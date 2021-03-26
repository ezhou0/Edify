export const fetchPlaylists = () => {
    return $.ajax({
        url: `/api/playlists`,
        method: 'GET'
    });
}

export const fetchPlaylist = playlistId => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: 'GET'
    });
}

export const createPlaylist = playlist => {
    return $.ajax({
        url: '/api/playlists',
        method: 'POST',
        data: { playlist }
    });
}

export const deletePlaylist = playlistId => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: 'DELETE'
    })
}

export const updatePlaylist = playlist => {
    return $.ajax({
        url: `/api/playlists/${playlist.id}`,
        method: 'PATCH',
        data: { playlist }
    })
}