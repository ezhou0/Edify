import React from 'react';
import SongsIndexContainer from '../songs/song_index_container';


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchAlbum(this.props.match.params.albumId);
    }


    render(){
        let count = 0;
        return(
            <div className='album_show_div'>
                

                <div className="album_show_top">
                    <div className="album_show_pic">
                        <img id="show_top_pic" src={this.props.album.photo}/>
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_album">
                            Album
                        </div>
                        <div id="album_show_title">
                            {this.props.album.name}
                        </div>
                        <div id="album_show_info">
                            {this.props.album.artist} - {this.props.album.year}
                        </div>
                    </div>
                </div>

                <div className="album_show_bottom">
                    songs map go here
                    <div className="song_component_left" id="hash_and_title">
                        <div className="ord_div">
                            #
                            </div>
                        <div className="song_info">
                            TITLE
                            </div>
                    </div>
                    <SongsIndexContainer albumId = {this.props.album.id} />
                    {/* {this.props.album.songs.map(song => {
                        count +=1
                        return <div  id="album_show_song"><SongContainer artist={this.props.album.artist[this.props.album.artist_id]} song={song} /></div>
                    })} */}
                </div>

            </div>

        )

    }

}
export default AlbumShowComponent;
