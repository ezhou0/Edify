import React from 'react';

class AddToPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song_id: props.songId,
            playlist_id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const pSong = Object.assign({}, this.state, { playlist_id: e.target.value });

        this.props.createPlaylistSong(pSong);
        
    }

    playlistBool(){
        this.props.playlists.map(playlist =>(
            (playlist.songs.map(song => (
                (song.id == this.state.song_id) ? true : false
            ))) ? true : false
        ))
    }

    render() {
        const { playlists } = this.props;
       
        if (!playlists) return null;
        return (
            <i className="fa fa-plus" aria-hidden="true">
                <ul className="playlistadd">
                    <li>Add to playlist</li>
                    {
                        // playlists.map(playlist => (
                           
                        //    < button onClick = { this.handleSubmit }
                        //      value = { playlist.id }
                        //      key = { playlist.id } >
                        //         { playlist.name }
                        //         {/* {console.log(this.props)} */ }
                        //        {/* { console.log(playlist.songs.map(song => (song.id === this.state.song_id ? true : false))) }) */}
                        //        {console.log(playlist.songs)}
                        //     </button>
                           
                            
                            
                        // ))

                        playlists.map(playlist => {
                            var checker = false;
                            playlist.songs.map(
                                song=>{
                                    if(song.id === this.state.song_id){
                                        checker = true;
                                    }
                                }
                            
                            )
                            if(checker === false){
                                return (< button onClick={this.handleSubmit}
                                    value={playlist.id}
                                    key={playlist.id} >
                                    {playlist.name}
                                    {/* {console.log(this.props)} */}
                                    {/* { console.log(playlist.songs.map(song => (song.id === this.state.song_id ? true : false))) }) */}
                                    {console.log(playlist.songs)}
                                </button>)
                            }
                          else{
                              return
                          }
                        })

                       
                        
                    }
                </ul>
            </i>
        )
    }
}

export default AddToPlaylist;