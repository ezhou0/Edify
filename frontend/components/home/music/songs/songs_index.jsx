import React from 'react';
import SongsIndexItem from './songs_index_item';

class SongsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    render() {
        const { songs, fetchSong, togglePlayState, currentSong, playState} = this.props;
        // debugger
        return (
            <ul className="songs-grid sub-grid">
                {
                    songs.map(song => (
                        <SongsIndexItem
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
        )
    }
}

export default SongsIndex;