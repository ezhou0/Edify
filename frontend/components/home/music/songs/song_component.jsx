import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom'

class SongComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                {this.props.song.title}
                {/* <div>
                    {<Link to={`/artists/${this.props.artist.id}`} id="song_artist_name">
                        {this.props.artist.name}
                    </Link> }
                </div> */}
            </div>

        )
    }
}

export default SongComponent



