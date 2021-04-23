import React from "react";
import {Link} from 'react-router-dom';



class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { search: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchPlaylists
    // }

    handleSearch(e) {
        e.preventDefault();
        if (this.state.search !== "") {
            this.props.removeSearch();
            this.props.search(this.state.search);
            this.props.history.push(`/searches/${this.state.search}`)
        }
    }

    handleChange(e) {
        this.setState({ search: e.currentTarget.value });
    }

    render() {
        
        const {playlists} = this.props;
        
        return (
            
            <div className="sidebar_comp">
                <div id="sidebar_top">
                    <Link to = '/' className='loggedin-logo-div' >
                        
                            <img className="li-home-logo" src={window.edifyURL} alt="Edify Logo" />
                            <div className='li-home-logo-text'>dify</div>
                    </Link>
                    <div className = 'sidebar-top-content'>
                        <p className = 'sidebar-tab'>Home</p>
                        <input type="text" placeholder="Search" 
                           className = 'sidebar-tab'
                            value={this.state.search}
                            onChange={this.handleChange}
                        />
                        <h5 className = 'playlist-header'>PLAYLISTS</h5>
                        <button className = 'playlist-tab' onClick={() => this.props.openModal('playlist')}> Create Playlist</button>
                    </div>
                </div>
                <div id="sidebar_bottom">
                    <p className='sidebar-bottom-content'>map of playlists here</p>
                    { playlists.map(playlist => {
                        return <div>{playlist.name}</div>
                        // return <Link to={`/playlists/${playlist.id}`} key={playlist.id} id="sidebar_playlist">{playlist.title.length >= 20 ? playlist.title.slice(0, 20) + "..." : playlist.title}</Link>
                    })}
                </div>
            </div>
        )
    }
}

export default SideBar