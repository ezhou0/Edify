import React from 'react';

class ArtistShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render(){
        const artist = this.props.artist;
        

        return(
            <div id='artist_show_container'>
                <div className = 'artist_show_pic'>
                    pic goes here
                </div>

                <div className = 'artist_show_div'>
                    <div className = 'artist_show_name'>
                        {artist.name}
                    </div>
                    <div>
                        play button
                    </div>

                    <div>
                        Songs 
                    </div>

                    <div className = 'artist_album_div'>
                        <div className = 'artist_album_div_title'>
                            Discography
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ArtistShowComponent;