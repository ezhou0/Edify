import React from "react"
import { Redirect } from "react-router";
import HeaderComponent from "../home/header/header_component";

import PlaybarContainer from '../home/playbar/playbar_container'
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
                    <PlaybarContainer />
                </div>
               
                <div className="side_component">
                        <SideBarMain 
                            currentUser={currentUser}
                           
                            playlists = {playlists}
                            fetchPlaylists = {fetchPlaylists} 
                            createPlaylist = {createPlaylist}
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                            history={this.props.history}
                           
                        />
                       
                </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={currentUser}
                            logout={this.props.logout} history={this.props.history}
                        />
                    </div>
                
            </div>
        )
    }
}

export default LoggedInComponent