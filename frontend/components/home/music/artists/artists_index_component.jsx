import React from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link} from 'react-router-dom';

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const {artists} = this.props;
        return(
            <div>
                <div id="artist_index_title_see_all">
                    <div className="index_title">Artists</div>
                    <div id="artist_index_see_all">
                        <Link to="/searches/undefined/artists">See All</Link>
                    </div>
                </div>
                <div className="artist_profile_pic_div">
                    <div id="aritst_profile_pic_div_div">
                        {artists.slice(1, 6).map(artist => {
                            return <ArtistIndexItem key={artist.id} artist={artist} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistIndexComponent