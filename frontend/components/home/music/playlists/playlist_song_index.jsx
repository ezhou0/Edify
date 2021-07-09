import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import AddToPlaylistFormContainer from '../playlists/add_to_playlist_form_container';
// import PlaylistDeleteContainer from '../playlists/playlist_delete_container';

const PlaylistIndexItem = ({ playlist, song, fetchSong, togglePlayState, playState, currentSong }) => {
    return (
        <div className="playlist-song-container-container">
            <li className="playlist-song-container" onClick={() => {
                fetchSong(song.id)
            }}>

                {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
                <button>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}<p>{song.trackNumber}</p></button>
                <p className="playlist-song-name">{song.title}</p>
            </li>
            {/* <AddToPlaylistFormContainer songId={song.id} />
            <PlaylistDeleteContainer song={song} playlist={playlist} /> */}
        </div>
    )
};

export default PlaylistIndexItem;