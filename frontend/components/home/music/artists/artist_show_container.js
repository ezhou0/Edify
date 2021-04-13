import {connect} from 'react-redux';
import { fetchArtist } from '../../../../util/artist_api_util';
import ArtistShowComponent from './artist_show_component';

const mapStateToProps = (state, ownProps) =>{
    return{
        artist: state.entities.artists[ownProps.match.params.artistId]
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShowComponent)