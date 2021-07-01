import React from "react"
import { Redirect } from "react-router";
import HeaderComponent from "../home/header/header_component";
import ArtistIndexContainer from "../home/music/artists/artist_index_container";
import Playbar from '../home/playbar/playbar_component'
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
               
                <div className="side_component">
                        <SideBarMain 
                            currentUser={currentUser}
                            
                            playlists = {playlists}
                            fetchPlaylists = {fetchPlaylists} 
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                            history={this.props.history}
                           
                        />
                </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username}
                            logout={this.props.logout} history={this.props.history}
                        />
                    </div>
                
            </div>
        )
    }
}

export default LoggedInComponent