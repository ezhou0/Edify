import * as ArtistApiUtil from "../util/artist_api_util"


export const RECEIVE_ARTIST = "RECEIVE_ARTIST"
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"

const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

const receiveArtists = (artists) => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const fetchArtists = () => dispatch => {
    return ArtistApiUtil.receiveArtists()
        .then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = artistId => dispatch => {
    return ArtistApiUtil.receiveArtist(artistId)
        .then(artist => dispatch(receiveArtist(artist)));
};

