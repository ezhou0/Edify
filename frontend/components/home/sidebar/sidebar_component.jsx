import React from "react";
import {Link} from 'react-router-dom';



class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {playlists} = this.props;
        
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
                        <button classNAme = 'playlist-tab' onClick={() => this.props.openModal('playlist')}> Create Playlist</button>
                    </div>
                </div>
                <div id="sidebar_bottom">
                    <p className='sidebar-bottom-content'>map of playlists here</p>
                    {/* { playlists.map(playlist => {
                        return <Link to={`/playlists/${playlist.id}`} key={playlist.id} id="sidebar_playlist">{playlist.title.length >= 20 ? playlist.title.slice(0, 20) + "..." : playlist.title}</Link>
                    })} */}
                </div>
            </div>
        )
    }
}

export default SideBar