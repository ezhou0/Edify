import React from "react"
import HeaderComponent from "../header/header_component";
import Playbar from "../playbar/playbar_component";
import SideBarMain from "../sidebar/sidebar_component";

class LoggedInComponent extends React.Component {
    constructor(props) {
        super(props);
    }
  

    render() {
        console.log("home_main_comp")
        if (this.props.currentUser === undefined) {
            return null;
        }
        const { currentUser, playlists, createPlaylist, fetchPlaylists} = this.props;
        return (
            <div className="main_div">
                <div className="playbar_component">
                    <Playbar />
                </div>
                <div className="main_and_side_div">
                    <div className="side_component">
                        <SideBarMain 
                            // currentUser={currentUser}
                            // createPlaylist = {createPlaylist}
                            // playlists = {playlists}
                            // fetchPlaylists = {fetchPlaylists} 
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                        />
                    </div>
                    <div className="main_component">
                        <h3>Welcome to Edify, {currentUser.username}</h3>
                    </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username}
                            logout={this.props.logout} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedInComponent