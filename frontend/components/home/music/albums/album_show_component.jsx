import React from 'react';


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }


    render(){
        
        

        return(
            <div className='album_show_div'>
               

                <div className="album_show_top">
                    <div className="album_show_pic">
                        Album pic here
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_album">
                            Album
                        </div>
                        <div id="album_show_title">
                            {this.props.album.name}
                        </div>
                        <div id="album_show_info">
                            {this.props.album.artist} - {this.props.album.year}
                        </div>
                    </div>
                </div>

                <div className="album_show_bottom">
                    songs map go here
                </div>

            </div>

        )

    }

}
export default AlbumShowComponent;
