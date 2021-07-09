import React from 'react';

class AddToPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song_id: props.songId,
            playlist_id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const pSong = Object.assign({}, this.state, { playlist_id: e.target.value });
        this.props.createPlaylistSong(pSong);
    }

    render() {
        const { playlists } = this.props;
        if (!playlists) return null;
        return (
            <i className="add-song-icon">+
                <ul className="playlistadd">
                    <li>Add to playlist</li>
                    {
                        playlists.map(playlist => (
                            <button onClick={this.handleSubmit} value={playlist.id}>{playlist.name}</button>
                        ))
                    }
                </ul>
            </i>
        )
    }
}

export default AddToPlaylist;