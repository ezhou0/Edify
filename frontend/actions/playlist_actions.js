import * as PlaylistsAPIUtil from "../util/playlist_api_util"

export const RECEIVE_USERS_PLAYLISTS = "RECEIVE_USERS_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

const receiveUsersPlaylists = (playlists) => {
    return {
        type: RECEIVE_USERS_PLAYLISTS,
        playlists
    };
}

const receivePlaylist = (playlist) => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    }
}


export const thunkFetchUsersPlaylist = (userId) => dispatch => PlaylistsAPIUtil.fetchUsersPlaylists(userId)
    .then(playlists => dispatch(receiveUsersPlaylists(playlists)));

export const thunkFetchPlaylist = playlistId => dispatch => PlaylistsAPIUtil.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)));

export const thunkCreatePlaylist = playlist => dispatch => PlaylistsAPIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)));

export const thunkDeletePlaylist = playlistId => dispatch => PlaylistsAPIUtil.deletePlaylist(playlistId)
    .then(() => dispatch(removePlaylist(playlistId)));

export const thunkUpdatePlaylist = playlist => dispatch => PlaylistsAPIUtil.updatePlaylist(playlist)
    .then((playlist) => dispatch(receivePlaylist(playlist)));
