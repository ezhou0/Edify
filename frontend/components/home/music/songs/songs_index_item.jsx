import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import AddToPlaylistFormContainer from '../playlists/add_to_playlist_form_container';

const SongsIndexItem = ({ song, fetchSong, togglePlayState, playState, currentSong }) => {
    return (
        <div className="song-container-container">
            <li className="song-container" onClick={() => {
                fetchSong(song.id)
            }}>

                <button>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}<p>p/pa</p></button>
                <p className="song-name">{song.trackNumber} {song.name}</p>
            </li>
            {/* <AddToPlaylistFormContainer songId={song.id} /> */}
        </div>
    )
};

export default SongsIndexItem;