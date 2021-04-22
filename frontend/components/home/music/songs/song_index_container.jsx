import {connect} from 'react-redux';
import SongsIndex from './song_index';
import {fetchSongs} from '../../../../actions/song_actions';


const maptStatetoProps = state => {
    return{
        songs: Object.values(state.entities.songs)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
   
});

export default connect(maptStatetoProps,mapDispatchToProps)(SongsIndex);

