import {connect} from 'react-redux';
import {fetchAlbum} from '../../../../actions/album_actions';
import AlbumShowComponent from './album_show_component';

const mapStateToProps = (state, ownProps) => {
    return{
        album: state.entities.albums[ownProps.match.params.albumId]
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(AlbumShowComponent);