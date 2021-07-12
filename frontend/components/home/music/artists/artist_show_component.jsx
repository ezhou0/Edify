import React from 'react'; 
import AlbumItem from '../albums/album_index_item';
import SongsIndexContainer from '../songs/songs_index_container';
import AddToPlaylistContainer from '../playlists/add_song_to_playlist_container';


class ArtistShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render(){
        const { artist }  = this.props;
        const { songs, fetchSong, togglePlayState, currentSong, playState } = this.props;

        return(
            <div id='artist_show_container'>
                <div className = 'artist_show_pic'>
                    <img id="show_profile_pic" src={artist.photo} /> 
                </div>

                <div className = 'artist_show_div'>
                    <div className = 'artist_show_name'>
                        {artist.name}
                    </div>
                    <div className = 'artist_show_bulk'>
                        <div>
                            play button here
                        </div>

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
                                    <li key = {song.id}>
                                        <div className="song-container" key={song.id} onClick={() => {
                                            fetchSong(song.id) }}>
                                            <button>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}<p>{song.trackNumber} </p></button>
                                            <p className="song-name">{song.title}</p>
                                        </div>
                                        <AddToPlaylistContainer songId={song.id} />
                                    </li>
                                    
                                )
                            })}
                        </ul>

                        <div className = 'artist_album_div'>
                            <div className = 'artist_album_div_title'>
                                Discography
                            </div>

                            <div id="artist_album_div_album">
                                {/* {albums.map(album => {
                                    albumNum += 1;
                                    return(
                                        <AlbumItem key = {albumNum} album = {album} />
                                    )
                                })} */}
                                {artist.albums.map(album => {
                                    return (
                                        <AlbumItem
                                            album={album}
                                            key={`${album.id}${this.props.artist.name}`}
                                        />
                                    )
                                })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ArtistShowComponent;