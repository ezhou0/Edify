import React from 'react';
import SongContainer from '../songs/song_container';


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchAlbum(this.props.match.params.albumId);
    }


    render(){
        // let count = 0;

        // let songs = "";
        // if (this.props.album.songs !== undefined) {
        //     songs = Object.values(this.props.album.songs)
        // }
        // return(
        //     <div className='album_show_div'>
                

        //         <div className="album_show_top">
        //             <div className="album_show_pic">
        //                 <img id="show_top_pic" src={this.props.album.photo}/>
        //             </div>
        //             <div className="album_show_info">
        //                 <div id="album_show_album">
        //                     Album
        //                 </div>
        //                 <div id="album_show_title">
        //                     {this.props.album.name}
        //                 </div>
        //                 <div id="album_show_info">
        //                     {this.props.album.artist} - {this.props.album.year}
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="album_show_bottom">
        //             songs map go here
        //             <div className="song_component_left" id="hash_and_title">
        //                 <div className="ord_div">
        //                     #
        //                     </div>
        //                 <div className="song_info">
        //                     TITLE
        //                     </div>
        //             </div>
                    
        //             {songs.map(song => {
        //                 count +=1
        //                 return <div  key = {count} id="album_show_song"><SongContainer artist={this.props.album.artist[this.props.album.artist_id]} song={song} /></div>
        //             })}
        //         </div>

        //     </div>

        // )

        const { album } = this.props;
        if (!album) {return null;} 
        return (
            
            <div>
                image, album info, song map
                <div className="album_show_pic">
                         <img id="show_top_pic" src={album.photo}/>
                </div>
                <div className = "album-show-name">{album.albumName}</div>
            </div>
        )

    }

}
export default AlbumShowComponent;
