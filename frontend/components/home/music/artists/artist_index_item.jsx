import React from 'react';
import {Link} from 'react-router-dom';

class ArtistIndexItem extends React.Component{

    render(){
        const {artist} = this.props;
        return(
            <Link to={`/artists/${artist.id}`} className ='profile-item'>
                <div className='profile_pic'>
                    picture goes here
                </div>

                <div className = 'profile_name'>
                    <div>{artist.name}</div>
                    <div className = 'profile_item_description'>Artist</div>
                </div>
            
            </Link>
        )
    }
}

export default ArtistIndexItem