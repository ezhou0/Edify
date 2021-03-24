import React from "react";
import {Link} from 'react-router-dom';



class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div className="sidebar_comp">
                <div id="sidebar_top">
                    <div className='loggedin-logo-div'>
                            <img className="li-home-logo" src={window.edifyURL} alt="Edify Logo" />
                            <div className='li-home-logo-text'>dify</div>
                    </div>
                    <div className = 'sidebar-top-content'>
                        <p className = 'sidebar-tab'>Home</p>
                        <p className = 'sidebar-tab'>Search Bar</p>
                        <h5 className = 'playlist-header'>PLAYLISTS</h5>
                        <p className = 'playlist-tab'> Create Playlist</p>
                        <button> modal</button>
                    </div>
                </div>
                <div id="sidebar_bottom">
                    <p className='sidebar-bottom-content'>map of playlists here</p>
                </div>
            </div>
        )
    }
}

export default SideBar