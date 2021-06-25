import React from "react"
import { Redirect } from "react-router";
import HeaderComponent from "../home/header/header_component";
import ArtistIndexComponent from "../home/music/artists/artist_index_component";
import Playbar from "../home/playbar/playbar_component";
import SideBarMain from "../home/sidebar/sidebar_component";

class LoggedInComponent extends React.Component {
    constructor(props) {
        super(props);
    }
  
    redirect(){
        if(this.props.currentUser === false){
            return <Redirect to='/' />
        }
    }

    render() {
        // console.log("home_main_comp")
        if (this.props.currentUser === undefined) {
            return null;
        }
        const { currentUser, playlists, createPlaylist, fetchPlaylists} = this.props;
        return (
            <div className="main_div">
                {this.redirect()};
                <div className="playbar_component">
                    <Playbar />
                </div>
                <div className="main_and_side_div">
                    <div className="side_component">
                        <SideBarMain 
                            currentUser={currentUser}
                            // createPlaylist = {createPlaylist}
                            playlists = {playlists}
                            fetchPlaylists = {fetchPlaylists} 
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                            history={this.props.history}
                            search={this.props.search}
                            removeSearch={this.props.removeSearch}
                        />
                    </div>
                    <div className="main_component">
                        {/* <h3>Welcome to Edify, {currentUser.username}</h3> */}
                         
                    </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username}
                            logout={this.props.logout} history={this.props.history}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedInComponent