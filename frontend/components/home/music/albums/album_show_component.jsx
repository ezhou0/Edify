
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
                <div className = 'album-show-top'>
                <div className = 'album_show_pic'>
                     <img id='album-show-profile'src={album.photo} />
                </div>
               
                   
                <div className = 'album-info'>
                    <div className = 'album-show-album'>ALBUM</div>
                    <div className = "album-show-name">{album.albumName}</div>
                    <div className = 'album-show-sub'>
                        <div className='album-artist-link'> <Link to={`/artists/${album.artist.id}`} >{album.artist.name} </Link> </div>                            <div className = 'album-artist-year'> • {album.year}</div>
                    </div>
                 </div>
                </div>
                

                <div className='album_show_bottom'>
                    <div className = 'album-song-bot-top'>
                        <div className='album-song-orderNum'>
                            #
                        </div>
                        <div className = 'album-song-title'>
                            TITLE
                        </div>

                    </div>
                     < SongsIndexContainer className="album-show" albumId={album.id} />
                </div>

                    
                
                
            </div>
        )

    }

}
export default AlbumShowComponent;
