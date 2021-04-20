import React from 'react';


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
    }


    render(){
        return(
            <div className='album_show_div'>
                album show 

            </div>

        )

    }

}
export default AlbumShowComponent;
