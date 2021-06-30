import React from 'react'; 
import AlbumItem from '../albums/album_index_item';


class ArtistShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render(){
        const artist = this.props.artist;
        const albums = this.props.albums;
        let albumNum = 0;

        return(
            <div id='artist_show_container'>
                <div className = 'artist_show_pic'>
                    <img id="show_profile_pic" src={artist.photo} />
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

                        <div>
                            {albums.map(album => {
                                albumNum += 1;
                                return(
                                    <AlbumItem key = {albumNum} album = {album} />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ArtistShowComponent;