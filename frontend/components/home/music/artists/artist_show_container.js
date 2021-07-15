import {connect} from 'react-redux';
import { fetchArtist } from '../../../../actions/artist_actions';
import ArtistShowComponent from './artist_show_component';
import { fetchSongs, fetchCurrentSong } from '../../../../actions/song_actions';
import { togglePlayState } from '../../../../actions/session_actions';

const mapStateToProps = (state, ownProps) =>{
    return{
        artist: state.entities.artists[ownProps.match.params.artistId],
        // albums: Object.values(state.entities.albums),
        currentSong: state.session.currentSong,
        playState: state.session.playState
       
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchArtist: artistId => dispatch(fetchArtist(artistId)),
        fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
        fetchSong: (songId) => dispatch(fetchCurrentSong(songId)),
        togglePlayState: (songId) => dispatch(togglePlayState(songId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShowComponent)