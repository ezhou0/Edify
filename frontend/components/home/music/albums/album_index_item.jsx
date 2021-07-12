import React from 'react';
import {Link} from 'react-router-dom';

class AlbumItem extends React.Component{


    render(){
        const {album} = this.props;
        return(
            <Link to={`/albums/${album.id}`} className = 'album_item_div'>
                <div className = 'album_item_cover'>
                   {album.albumPhoto}
                </div>
                <div className = 'album_title_div'>
                    <div>
                        {album.name}
                    </div>
                    <div className =  'album_year'>
                        {/* {this.props.album.artist.name}
                        <br/> */}
                        {album.year} • Album
                    </div>
                

                </div>
            
            </Link>
        )
    }
}

export default AlbumItem;