import React from 'react'; 
import AlbumItem from '../albums/album_index_item';
import SongsIndexContainer from '../songs/songs_index_container';
import AddToPlaylistContainer from '../playlists/add_song_to_playlist_container';
import { Link } from 'react-router-dom';


class ArtistShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        console.log(this.props.match);
        this.props.fetchArtist(this.props.match.params.artistId);
        // .then((response)=>console.log('hello',response));
    }



    render(){
        const { artist, albums }  = this.props;
        const { songs, fetchSong, togglePlayState, currentSong, playState } = this.props;
        // console.log('artist',this.props);
        if (this.props.artist === undefined || artist.artist === undefined ) {return (<div>
            null page
        </div>)
        } 
        else{
        return(
            <div id='artist_show_container'>
                <div className= 'artist_show_pic'>
                    <img id="show_profile_pic" src={this.props.artist.artist.photo} /> 
                </div>

                <div className = 'artist_show_div'>
                    <div className = 'artist_show_name'>
                        {this.props.artist.artist.name}
                    </div>
                    <div className = 'artist_show_bulk'>
                        

                        <div className='artist_album_div_title'>
                            Songs 
                        </div>
                        <ul className="songs-grid sub-grid">
                            {artist.songs.map((song)=>{
                                return (
                                    // <SongsIndexContainer
                                    //     song = {song}
                                    //     key = {song.id}
                                    // />
                                    <div className="song-container-container" key = {song.id}>
                                        <li className="song-container" onClick={() => {
                                            fetchSong(song.id)
                                        }}>

                                            <button className='play-button'>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
                                            <p>{song.trackNumber} </p>
                                            <p className="song-name">{song.title}</p>

                                        </li>
                                        <AddToPlaylistContainer songId={song.id} className='add-playlist-container' />
                                    </div>
                                    
                                )
                            })}
                        </ul>

                        <div className = 'artist_album_div'>
                            <div className = 'artist_album_div_title'>
                                Discography
                            </div>

                            <div id="artist_album_div_album">
                                {this.props.artist.albums.map(album => {
                                    return(
                                        <AlbumItem key = {album.id} album = {album} />
                                    )
                                })}
                                {/* {artist.albums.map(album => {
                                    return (
                                        <div key = {album.id}>
                                            <Link to={`/albums/${album.id}`} className='album_item_div'>
                                                <div className='album_item_cover'>
                                                    {this.props.album.albumPhoto}
                                                </div>
                                                <div className='album_title_div'>
                                                    <div>
                                                        {album.name}
                                                    </div>
                                                    <div className='album_year'>
                                                       
                                                        {album.year} • Album
                                                    </div>


                                                </div>

                                            </Link>
                                        </div>
                                    )
                                })
                                } */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
}

export default ArtistShowComponent;