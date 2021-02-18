import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from "../actions/artist_actions";


const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            const newState = Object.assign({}, oldState);
            newState[action.artist.artist.id] = action.artist.artist;
            return newState;
        default:
            return oldState;
    };
}

export default artistsReducer;