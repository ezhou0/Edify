import { connect } from "react-redux"
import { FetchArtist } from "../../../actions/artist_actions"
import {FetchUsersPlaylist, CreatePlaylist} from "../../../actions/playlist_actions";
import { logout } from "../../../actions/session_actions";
import LoggedInComponent from "./logged_in_component";
import { withRouter } from 'react-router-dom';


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
        fetchArtist: artistId => dispatch(FetchArtist(artistId)),
        fetchArtists: () => dispatch(FetchArtists()),
        fetchPlaylists: userId => dispatch(FetchUsersPlaylist(userId)),
        createPlaylist: playlist => dispatch(CreatePlaylist(playlist)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInComponent));