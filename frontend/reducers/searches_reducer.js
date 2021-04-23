import { RECEIVE_SEARCH, REMOVE_SEARCH } from "../actions/search_actions";
import { RESET_STATE } from "../actions/session_actions"

const searchesReducer = (oldState = { songs: {}, artists: {}, albums: {} }, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_SEARCH:
            newState.songs = action.searchRes.search.songs;
            newState.artists = action.searchRes.search.artists;
            newState.albums = action.searchRes.search.albums;
            if (newState.albums === undefined) {
                newState.albums = {};
            }
            if (newState.artists === undefined) {
                newState.artists = {};
            }
            if (newState.songs === undefined) {
                newState.songs = {};
            }
            return newState
        case REMOVE_SEARCH:
            return { songs: {}, artists: {}, albums: {} }
        case RESET_STATE:
            return { songs: {}, artists: {}, albums: {} };
        default:
            return oldState;
    }
}

export default searchesReducer;