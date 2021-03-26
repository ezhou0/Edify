export const addSongToPlaylist = pl_and_song_id => {
    return $.ajax({
        url: '/api/playlist_song',
        method: 'POST',
        data: { song_on_playlist: pl_and_song_id }
    })
}

export const deleteSongFromPlaylist = (sopId) => {
    return $.ajax({
        url: `/api/playlist_song/${sopId}`,
        method: 'DELETE'
    })
}
