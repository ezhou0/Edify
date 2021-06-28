import React from 'react';
import SongsIndexItem from './songs_index_item';

class SongsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    render() {
        const { songs, fetchSong} = this.props;
        // debugger
        return (
            <ul className="songs-grid sub-grid">
                {
                    songs.map(song => (
                        <SongsIndexItem
                            song={song}
                            fetchSong={fetchSong}
                            key={song.id}
                            
                        />
                    ))
                }
            </ul>
        )
    }
}

export default SongsIndex;