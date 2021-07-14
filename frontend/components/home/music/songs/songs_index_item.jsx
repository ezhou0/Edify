import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AddToPlaylistContainer from '../playlists/add_song_to_playlist_container';
const SongsIndexItem = ({ song, fetchSong, togglePlayState, playState, currentSong }) => {
    return (
        <div className="song-container-container">
            <li className="song-container" onClick={() => {
                fetchSong(song.id)
            }}>

                <button className = 'play-button'>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
                <p>{song.trackNumber} </p>
                <p className="song-name">{song.title}</p>
                
            </li>
            <AddToPlaylistContainer songId={song.id} className='add-playlist-container' />
        </div>
    )
};

export default SongsIndexItem;