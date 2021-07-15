
import React from 'react';
import { deletePlaylistSong } from '../../../../actions/playlist_actions';

const PlaylistDeleteContainer = ({ playlist, song }) => {
    const playlistSong = {
        playlist_id: playlist.id,
        song_id: song.id
    }
    return (
        <div>
            <button onClick={() => dispatch(deletePlaylistSong(playlistSong))}><i className="fa fa-minus" aria-hidden="true"></i></button>
        </div>
    )

}

export default PlaylistDeleteContainer;