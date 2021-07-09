import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AddToPlaylistContainer from './add_song_to_playlist_container';
import PlaylistDeleteContainer from './delete_song_from_playlist_container';

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
            <AddToPlaylistContainer songId={song.id} />
            <PlaylistDeleteContainer song={song} playlist={playlist} />
        </div>
    )
};

export default PlaylistIndexItem;