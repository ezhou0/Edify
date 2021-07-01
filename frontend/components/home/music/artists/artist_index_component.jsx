import React from 'react';
import ArtistIndexItem from './artist_index_item';
import {Link} from 'react-router-dom';

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.fetchArtists();
    }

    render(){
        const {artists} = this.props;
        return(
            <div id='artist-index'>
                <div id="artist_index_title_see_all">
                    <div className="index_title">Artists</div>
                    
                </div>
                <div className="artist_profile_pic_div">
                    <ul id="artist_profile_pic_div_div">
                        {artists.slice(1, 10).map(artist => (
                            <ArtistIndexItem key={artist.id} artist={artist} />
                        ))}

                        {/* {artists.map(artist => {
                            return (
                                <ArtistIndexItem key={artist.id} artist= {artist} />
                            )
                        })} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArtistIndexComponent