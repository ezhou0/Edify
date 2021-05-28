import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import SongComponent from "./song_component"

const mapStateToProps = (state, ownProps) => {
    return {
        //playlists: Object.values(state.entities.playlists)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo)),
        // addSongToPlaylist: ids => dispatch(thunkAddSongToPlaylist(ids)),
        // removeSong: (sapId, playlistId) => dispatch(thunkRemoveSongFromPlaylist(sapId, playlistId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongComponent));