import {connect} from 'react-redux';
import { fetchArtists } from '../../../../util/artist_api_util';
import ArtistIndexComponent from './artists_index_component';

const mapStateToProps = state => {
    return{
        artists: Object.values(state.entities.artists),
        currentUser: state.session.id
    }
};

const mapDispatchToProps= dispatch =>{
    return{
        fetchArtist: ()=> dispatch(fetchArtists()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexComponent);

