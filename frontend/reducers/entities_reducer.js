import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import artistsReducer from "./artists_reducer";
import albumsReducer from './albums_reducer';
import { playlistsReducer } from "./playlist_reducer";
import  songsReducer from "./songs_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    playlists: playlistsReducer,
    songs: songsReducer,
});

export default entitiesReducer;