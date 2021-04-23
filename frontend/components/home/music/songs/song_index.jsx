import React from 'react';
import SongComponent from './song_component';

class SongsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
       
        this.props.fetchSongs(this.props.albumId);
        debugger;
    }

    render(){
        
        const { songs } = this.props;
        return(
            <ul className='songs-grid'>
                {
                    songs.map(song=>(
                        <SongComponent 
                        song= {song}
                        key = {song.id}
                        />
                    ))
                } 

            </ul>
        )
    }
}

export default SongsIndex;