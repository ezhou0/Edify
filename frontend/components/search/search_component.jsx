import React from "react"
import SongContainer from "../home/music/songs/song_index_container"
import { Link } from "react-router-dom"

import AlbumItem from '../../components/home/music/albums/album_index_item'
import ArtistIndexItem from "../home/music/artists/artist_index_item";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { noResults: "hidden" }
        this.timeout = undefined;
        
        this.albumsLength;
        this.artistsLength;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.match.params.searchTerm === undefined) {
            this.props.searchAll();
        } else {
            this.props.search(this.props.match.params.searchTerm);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.searchTerm !== this.props.match.params.searchTerm) {
            if (this.props.match.params.searchTerm === undefined) {
                this.props.searchAll();
            } else {
                this.props.search(this.props.match.params.searchTerm);
            }
        }
    }

    componentWillUnmount() {
        if (this.timeout !== undefined) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
    }


    render() {
        const { albums, artists } = this.props;
        this.songsLength = songs.length;
        this.albumsLength = albums.length;
        this.artistsLength = artists.length;
        let songsHidden = ""
        let albumsHidden = ""
        let artistsHidden = ""
        // if (songs.length === 0) {
        //     songsHidden = "hidden"
        // }
        if (albums.length === 0) {
            albumsHidden = "hidden"
        }
        if (artists.length === 0) {
            artistsHidden = "hidden"
        }
        this.timeout = setTimeout(() => {
            if (this.songsLength + this.albumsLength + this.artistsLength === 0) {
                this.setState({ noResults: "no_results_found" })
            } else if (this.state.noResults === "no_results_found") {
                this.setState({ noResults: "hidden" })
            }
        }, 2000);
        let count = 0;
        return (
            <div className="main_content_window" id="search_main_window">
                <div className="main_search_window">

                    <div className="search_index_object_div" id="song_search_div" >
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                {/* <Link to={`/searches/${this.props.match.params.searchTerm}/songs`}>
                                    Songs
                                </Link> */}
                            </div>
                            <div id="search_result_title_right">
                                <Link to={`/searches/${this.props.match.params.searchTerm}/songs`}>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div>
                            {/* {songs.slice(0, 5).map(song => {
                                return (
                                    <div className="search_song_component" key={song.id}>
                                        <img id="search_song_image" src={song.photoUrl} />
                                        <SongContainer artist={song.artist} song={song} />
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>

                    <div className="index_object_div" id="artist_search_div" className={`${albumsHidden}`}>
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                <Link to={`/searches/${this.props.match.params.searchTerm}/albums`}>
                                    Albums
                                </Link>
                            </div>
                            <div id="search_result_title_right">
                                <Link to={`/searches/${this.props.match.params.searchTerm}/albums`}>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className="search_results_row">
                            {albums.slice(0, 5).map(album => {
                                return <div key={album.id}><AlbumItem album={album} /></div>
                            })}
                        </div>
                    </div>

                    <div className="index_object_div" id="artist_search_div" className={`${artistsHidden}`}>
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                <Link to={`/searches/${this.props.match.params.searchTerm}/artists`}>
                                    Artists
                                </Link>
                            </div>
                            <div id="search_result_title_right">
                                <Link to={`/searches/${this.props.match.params.searchTerm}/artists`}>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className="search_results_row">
                            {artists.slice(0, 5).map(artist => {
                                return <span id="artist_object_div" key={artist.id} ><ArtistIndexItem artist={artist} /></span>
                            })}
                        </div>
                    </div>

                    <div className="index_object_div" id={`${this.state.noResults}`}>
                        <div>
                            No Results found =(
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
