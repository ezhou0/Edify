import React from "react"


class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div className="sidebar_comp">
                <div id="sidebar_top">
                    <p>Logo here</p>
                    <p>home tab here</p>
                    <p>Search Bar here</p>
                    <h5>Playlists</h5>
                    <p>Create Playlist</p>
                </div>
                <div id="sidebar_bottom">
                    <p>map of playlists here</p>
                </div>
            </div>
        )
    }
}

export default SideBar