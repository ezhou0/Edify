import React from 'react';
import CurrentSong from './current_song';

class Playbar extends React.Component {

    constructor(props) {
        super(props);
        this.audio = React.createRef();
        this.changeVolume = this.changeVolume.bind(this);
        this.resetAudio = this.resetAudio.bind(this);
        this.skip = this.skip.bind(this);
        this.state = {
            time: null
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playState !== this.props.playState || prevProps.currentSong !== this.props.currentSong) {
            if (this.props.playState) {
                this.interval = setInterval(() => this.refresh(), 1000);
                this.audio.current.play();
            } else {
                clearInterval(this.interval);
                this.audio.current.pause();
            }
        }
    }
    refresh() {
        this.setState({ time: this.audio.current.currentTime });
    }
    skip() {
        this.setState({ time: this.audio.current.duration });
        this.audio.current.currentTime = this.audio.current.duration;
        this.toggle();
    }
    toggle() {
        this.props.togglePlayState(this.props.currentSong.id);
    }

    changeVolume(e) {
        this.audio.current.volume = e.target.value;
    }

    resetAudio(e) {
        this.audio.current.currentTime = 0;
        this.setState({ time: 0 });
    }

    MusicPlayer() {
        return (
            <div className="player-toolbar">
                <audio
                    ref={this.audio}
                    preload="metadata"
                    src={
                        this.props.currentSong ? this.props.currentSong.audio : ""
                    }
                    volume="0.5"
                />
                <div className="player">
                    <button
                        className="rewind-button"
                        onClick={() => this.resetAudio()}
                    >
                        <i className="fas fa-backward"></i>
                    </button>

                    <button className="play-button" onClick={() => this.toggle()}>
                        {this.props.playState ? (
                            <i className="fas fa-pause"></i>
                        ) : (
                            <i className="fas fa-play"></i>
                        )}
                    </button>
                    <button className="next-button" onClick={() => this.skip()}>
                        <i className="fas fa-forward"></i>
                    </button>

                </div>
                {this.audio.current ? (
                    <div className="song-seeker">
                        <CurrentSong
                            currentSong={this.props.currentSong}
                            audio={this.audio}
                            time={this.state.time}
                            playing={this.props.playState}
                            duration={this.audio.current.duration}
                        />
                    </div>
                ) : (
                    <div className="current-info">
                        null image
                        
                    </div>
                )}
                <div className="volume-slider">
                    <p className="volume-icon">
                        <i className="fas fa-volume-up"></i>
                    </p>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        defaultValue={
                            this.audio.current ? this.audio.current.volume : 0.5
                        }
                        step=".01"
                        className="slider"
                        id="myRange"
                        onChange={(e) => this.changeVolume(e)}
                    ></input>
                </div>
               
            </div>
        );
    };

    render() {
        return this.MusicPlayer();
    }
}

export default Playbar