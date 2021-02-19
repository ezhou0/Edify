import React from "react";

class Playbar extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="playbar_main">
                <div className="playbar_left">
                    {/* <img className="current_song_pic" src={imgPic} />
                    <div className="current_song_info">
                        <div id="song_title">{songTitle}</div>
                        <Link to={`/artists/${songArtist.id}`} id="song_artist">{songArtist.name}</Link>
                    </div> */}
                    <p>album image</p>
                    <p>song title</p>
                    <p>artist name</p>
                </div>
                <div className="playbar_mid">
                    {/* <div className="playbar_top_buttons">
                        <button className="playbar_play_button" onClick={() => this.handleToggle()}>
                            <FontAwesomeIcon id="playbar_play" className={`${this.button}`} icon={this.button} />
                        </button>
                        <div className="the_playbar">
                            <div className="left_progress">
                                {realTime}
                                <div id="the_playbar_container">
                                    <div className="progress" style={myStyle}>

                                    </div>
                                </div>
                            </div>
                            {duration}
                        </div>
                    </div> */}

                    <p>Playbar interface</p>
                </div>
                <div className="playbar_right">

                </div>
            </div>
        )
    }
}

export default Playbar;