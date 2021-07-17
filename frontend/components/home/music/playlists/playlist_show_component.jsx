import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PlaylistSongIndexItem from './playlist_song_index';
import PlaylistEditContainer from './playlist_edit_container';
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
                    
                    
                    <PlaylistEditContainer playlist={playlist} deletePlaylist={deletePlaylist} />
                    <div className = 'playlist-bottom'>
                        <div className='playlist-song-headers'>
                           
                            <div className='playlist-song-title'>
                                TITLE
                            </div>
                            {/* <button>
                                <Link to="/home" onClick={() => this.props.deletePlaylist(this.state)} className='playlist-dlt'>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </Link>
                            </button> */}

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