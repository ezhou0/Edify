import {connect} from 'react-redux';
import { fetchArtist } from '../../../../actions/artist_actions';
import { removeAlbums } from '../../../../actions/album_actions'
import ArtistShowComponent from './artist_show_component';

const mapStateToProps = (state, ownProps) =>{
    return{
        artist: state.entities.artists[ownProps.match.params.artistId],
       
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchArtist: artistId => dispatch(fetchArtist(artistId)),
        removeAlbums: () => dispatch(removeAlbums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShowComponent)