import { connect } from "react-redux"
import { fetchArtists } from "../../actions/artist_actions"
import {fetchPlaylists, createPlaylist} from '../../actions/playlist_actions';
import { logout } from "../../actions/session_actions";
import LoggedInComponent from "./logged_in_component";
import { withRouter } from 'react-router-dom';

import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        
        artists: Object.values(state.entities.artists),
        playlists: Object.values(state.entities.playlists),
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchArtist: artistId => dispatch(receiveArtist(artistId)),
        fetchArtists: () => dispatch(fetchArtists()),
        fetchPlaylists: ()=> dispatch(fetchPlaylists()),
        createPlaylist: playlist => dispatch(createPlaylist(playlist)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: (modal) => dispatch(closeModal(modal)),


        search: searchTerm => dispatch(thunkSearch(searchTerm)),
        removeSearch: () => dispatch(removeSearch()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInComponent));