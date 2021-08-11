import React from "react";
import { connect } from "react-redux";
import { updatePlaylist } from "../../../../actions/playlist_actions";
import { Link } from "react-router-dom";

class PlaylistEditContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePlaylist(this.state);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.playlist);
        
    }

    update(name) {
        return (e) => this.setState({ name: e.currentTarget.value });
    }

    render() {
        return (
            <div className="playlist-edit">
                <div>
                    <div className='playlist-show-header'>PLAYLIST</div>
                    <div className = 'playlist-name-container'>
                        <div><input type="text" value={this.state.name} onChange={this.update("name")} className='playlist-name' /></div>

                        <div className='playlist-edit-btns'>
                                    <button type="submit"
                                    value={this.state.name}
                                    onClick={this.handleSubmit} 
                                    className='playlist-confirm'><i class="far fa-check-circle"></i></button>
                                    
                        </div>
                        {/* <button>
                            <Link to="/home" onClick={() => this.props.deletePlaylist(this.state)} className='playlist-dlt'>
                                <i class="fa fa-trash fa-xs" aria-hidden="true"></i>
                            </Link>
                        </button> */}
                    </div>
                </div>
                   
                </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
});

export default connect(null, mapDispatchToProps)(PlaylistEditContainer);