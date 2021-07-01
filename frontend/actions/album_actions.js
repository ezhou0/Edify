import * as AlbumAPIUtil from "../util/album_api_util"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const REMOVE_ALBUMS = "REMOVE_ALBUMS"


export const receiveAlbum = (album) => {
    return {
        type: RECEIVE_ALBUM,
        album
    };
}

export const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

export const removeAlbums = () => {
    return {
        type: REMOVE_ALBUMS
    }
}

export const fetchAlbum = albumId => dispatch => AlbumAPIUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));

export const fetchAlbums = () => dispatch => {
    return AlbumsAPIUtil.receiveAlbums()
        .then(albums => dispatch(receiveAlbums(albums)));
};