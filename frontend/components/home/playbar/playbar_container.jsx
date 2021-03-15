import {connect} from 'react-redux';
import { receiveCurrentSong } from '../../../actions/song_actions';
import PlaybarComponent from './playbar_component';

const mapStateToProps = state => {
    return{
        song: state.currentSong.songInfo.song,
        artist: state.currentSong.songInfo.artist,
        currentSong: state.currentSong.songInfo.currentSong,
        songId: state.currentSong.songInfo.song,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        recieveSong: songInfo => dispatch(receiveCurrentSong(songInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaybarComponent);