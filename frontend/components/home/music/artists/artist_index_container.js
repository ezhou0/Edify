import {connect} from 'react-redux';
import { FetchArtists } from '../../../../actions/artist_actions'; 
import ArtistIndexComponent from './artist_index_component';

const mapStateToProps = state => {
    return{
        artists: Object.values(state.entities.artists),
        currentUser: state.session.id
    }
};

const mapDispatchToProps= dispatch => {
    return{
        fetchArtists: () => dispatch(FetchArtists()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexComponent);

