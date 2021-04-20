import { RECEIVE_ALBUM, REMOVE_ALBUMS } from "../actions/album_actions";
import { RECEIVE_ARTIST } from '../actions/artist_actions';


const albumsReducer = (oldState = {}, action) => {

    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ARTIST:
            return action.artist.albums;
        case RECEIVE_ALBUM:
            newState[action.album.album.id] = action.album;
            return newState;
        case REMOVE_ALBUMS:
            return {};
        default:
            return oldState;
    }
}

export default albumsReducer;