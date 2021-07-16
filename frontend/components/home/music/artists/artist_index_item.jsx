import React from 'react';
import {Link} from 'react-router-dom';

class ArtistIndexItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {artist} = this.props;
        return(
            <li>
               <div className="artist-index-item">
                    
                     <Link to={`/artists/${artist.id}`} className='profile-item'>
                         <div className='profile_pic'>
                                    <img className='item-pic' src={artist.photo} />
                       </div>

                         <div className='profile_name'>
                             <div>{artist.name}</div>
                             <div className='profile_item_description'>Artist</div>
                         </div>

                     </Link>

              </div>
         </li >
        )
    }
}



export default ArtistIndexItem