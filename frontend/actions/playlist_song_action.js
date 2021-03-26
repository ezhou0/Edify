import * as PSAPIutil from "../util/playlist_song_api_util";

export const REMOVE_SONG = "REMOVE_SONG"

const receivePlaylist = (playlist) => {
    return {
        type: "RECEIVE_PLAYLIST",
        playlist
    };
};

const removeSong = (payload) => {
    return {
        type: REMOVE_SONG,
        payload
    };
};

export const thunkAddSongToPlaylist = (psIds) => dispatch => PSAPIutil.addSongToPlaylist(psIds)
    .then(playlist => dispatch(receivePlaylist(playlist)));

export const thunkRemoveSongFromPlaylist = (psId) => dispatch => PSAPIutil.deleteSongFromPlaylist(psId)
    .then((playlist) => dispatch(receivePlaylist(playlist)));

