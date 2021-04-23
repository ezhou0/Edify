import { RESET_STATE } from "../actions/session_actions";
import { RECEIVE_CURRENT_SONG, RECEIVE_SONGS } from "../actions/song_actions";



export const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        // case RECEIVE_CURRENT_SONG:
        //     if (oldState.songInfo.currentSong !== undefined) {
        //         oldState.songInfo.currentSong.pause();
        //     }
        //     return { songInfo: action.songInfo };
        case RECEIVE_SONGS:
            return Object.assign({}, action.songs);
        // case RESET_STATE:
        //     return { songInfo: {} };
        default:
            return oldState;
    }
}
