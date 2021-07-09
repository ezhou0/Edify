import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PlaylistSongIndexItem from './playlist_song_index';
// import PlaylistEditFormContainer from './playlist_edit_form_container';
// import PlaylistDeleteContainer from './playlist_delete_container';

class PlaylistShowComponent extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.match.params.playlistId !== this.props.match.params.playlistId) ||
            (prevProps.playlist && prevProps.playlist.songs.length !== this.props.playlist.songs.length)) {
            this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render() {
        const { playlist, fetchSong, togglePlayState, currentSong, playState, deletePlaylist } = this.props;

        if (!playlist) return null;
        return (
            <div className="playlist-show-container">
                
                <div className="playlist-show-info">
                    <div className = 'playlist-show-header'>PLAYLIST</div>
                    <h1 className = 'playlist-name'>{playlist.name} </h1>
                    {/* <PlaylistEditFormContainer playlist={playlist} deletePlaylist={deletePlaylist} /> */}
                    <div className = 'playlist-bottom'>
                        <div className='playlist-song-headers'>
                           
                            <div className='playlist-song-title'>
                                TITLE
                            </div>

                        </div>
                        <ul >
                            {
                                playlist.songs.map(song => (
                                    <PlaylistSongIndexItem
                                        playlist={playlist}
                                        song={song}
                                        fetchSong={fetchSong}
                                        key={song.id}
                                        togglePlayState={togglePlayState}
                                        currentSong={currentSong}
                                        playState={playState}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlaylistShowComponent;