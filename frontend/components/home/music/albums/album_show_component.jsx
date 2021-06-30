import React from 'react';
import { Link } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchAlbum(this.props.match.params.albumId);
    }


    render(){
        

        const { album } = this.props;
        if (!album) {return null;} 
        return (
            
            <div className = 'album-show-container'>
                <div className = 'album-top'>
                    <img id="show_top_pic" src={album.photo} />
                    <div className = 'album-info'>
                        <div className = 'album-show-album'>Album</div>
                        <div className = "album-show-name">{album.albumName}</div>
                        <div className = 'album-show-sub'>
                            <div className='album-artist-link'> <Link to={`/artists/${album.artist.id}`} >{album.artist.name}</Link> </div>
                            <div className = 'album-artist-year'>• {album.year}</div>
                        </div>
                    </div>
                    
                </div>
                < SongsIndexContainer className="album-show" albumId={album.id} />


            </div>
        )

    }

}
export default AlbumShowComponent;
