import React from 'react';

class CurrentSong extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     time: null,
        //     duration: null,
        // };

        // this.seekTrack = this.seekTrack.bind(this);
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.refresh(), 100);
    // }

    // refresh() {
    //     this.setState({
    //         time: this.props.time,
    //         duration: this.props.duration || 500,
    //     });
    // }

    // seekTrack(e) {
    //     this.setState({ time: e.target.value });
    //     this.props.audio.current.currentTime = e.target.value; // this works
    // }

    render() {
        if (!this.props.currentSong) {
            return (
                <div className="current-info">
                    
                </div>
            );
        }

        return (
            <div className="current-info">
                <div className='current-song-pic'>
                    <img src={window.currentSong} alt="song-album-cover" />
                </div>
                <div className="with-info">
                    <div className = 'current-song-info'>
                        <p className="current-song-name">{this.props.currentSong.title}</p>
                        <p className="current-song-artist">{this.props.currentSong.artist.name}</p>
                    </div>
                    {/* <input
                        className="song-progress"
                        id = 'song-progress'
                        type="range"
                        min="0"
                        max={this.state.duration}
                        step="1"
                        value={this.state.time || 0}
                        onChange={(e) => this.seekTrack(e)}
                    /> */}
                </div>
            </div>
        );
    }
}

export default CurrentSong;