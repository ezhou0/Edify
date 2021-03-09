import * as AlbumAPIUtil from "../util/album_api_util"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const REMOVE_ALBUMS = "REMOVE_ALBUMS"


const receiveAlbum = (album) => {
    return {
        type: RECEIVE_ALBUM,
        album
    };
}

export const removeAlbums = () => {
    return {
        type: REMOVE_ALBUMS
    }
}

export const thunkFetchAlbum = albumId => dispatch => AlbumAPIUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));
