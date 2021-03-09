export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG"

export const receiveCurrentSong = (songInfo) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songInfo
    }
}