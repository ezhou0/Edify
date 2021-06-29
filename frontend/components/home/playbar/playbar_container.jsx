import {connect} from 'react-redux';
import { logout, demoLogin, togglePlayState } from '../../../actions/session_actions';
import Playbar from './playbar_component';

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

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);