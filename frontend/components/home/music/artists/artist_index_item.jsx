import React from 'react';
import {Link} from 'react-router-dom';

// class ArtistIndexItem extends React.Component{

//     render(){
//         const {artist} = this.props;
//         return(
//            
//         )
//     }
// }

const ArtistIndexItem = props => {

    return (
       
                <li>
               <div className="artist-index-item">

                     <Link to={`/artists/${props.artist.id - 1}`} className='profile-item'>
                         <div className='profile_pic'>
                                    <img src={props.artist.photo} />
                       </div>

                         <div className='profile_name'>
                             <div>{props.artist.name}</div>
                             <div className='profile_item_description'>Artist</div>
                         </div>

                     </Link>

              </div>
         </li >
           
    )
    
}




export default ArtistIndexItem