import React from "react"
import { Link } from "react-router-dom"

class SongComponent extends React.Component {
    constructor(props) {
        super(props)
        // this.playAudio = this.playAudio.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handlePlaylist = this.handlePlaylist.bind(this)
        // this.state = ({ dropdown: "song_dropdown_false", playlistDropDown: "playlist_drop_false", duration: "" })
        // this.location = "";
        // this.locationId = "";
        // this.add = "";
        // this.delete = "";
        // this.audio = new Audio(this.props.song.audioUrl);
        // this.audio.addEventListener("canplaythrough", () => {
        //     this.setState({ duration: this.audio.duration });
        // });
    }

   

    render() {
        

        return (
            <div className="song_component_div" id="song_search_div">
                <div className="song_component_left">
                    
                    <div className="song_info">
                        <div className="song_component_title_div" id="song_title_div">
                            {this.props.song.title}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SongComponent