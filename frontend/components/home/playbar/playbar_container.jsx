import {connect} from 'react-redux';
import { logout, demoLogin, togglePlayState } from '../../../actions/session_actions';
import PlaybarComponent from './playbar_component';
import Player from './player';

const mapStateToProps = state => {
    return{
        currentUser: session.id,
        currentSong: session.currentSong,
        playState: session.playState
    };
};

const mapDispatchToProps = dispatch => {
    return{
        togglePlayState: songId => dispatch(togglePlayState(songId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaybarComponent);