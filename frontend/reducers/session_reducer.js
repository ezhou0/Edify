import {
        RECEIVE_CURRENT_USER, 
        LOGOUT_CURRENT_USER,
        RESET_STATE,
        TOGGLE_PLAY_STATE
       } from '../actions/session_actions';

import { RECEIVE_SONG } from "../actions/song_actions";

const _nullUser = Object.freeze({
    id: null,
    currentSong: null,
    playState: false,
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RESET_STATE:
            return {id: null};
        case RECEIVE_SONG:
            return !state.currentSong || state.currentSong.id !== action.song.id ?
                Object.assign({}, state, { currentSong: action.song, playState: true }) :
                state.playState ?
                    Object.assign({}, state, { playState: false }) :
                    Object.assign({}, state, { playState: true });
        case TOGGLE_PLAY_STATE:
            return state.playState ? Object.assign({}, state, { playState: false }) : Object.assign({}, state, { playState: true })
        default:
            return state;
    }
};

export default sessionReducer;