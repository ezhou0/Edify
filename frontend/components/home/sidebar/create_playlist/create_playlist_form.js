import React, {Component} from 'react';
export default class CreatePlaylistForm extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div className = 'create-playlist-form'>
                <h2 className = 'create-playlist-title'>
                    Create a New Playlist
                </h2>
            </div>
            </>
        );
    }
}