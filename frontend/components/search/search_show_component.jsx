import React from "react";
import { Link } from "react-router-dom";
// import AlbumsIndexContainer from "../home/music/albums/
import ArtistIndexContainer from '../home/music/artists/artist_index_container';

class SearchShowComponent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { results } = this.props;
        if (results.empty) return null;
        return (
            <div className="search-container">
                <h1 className="search-header">Search Results</h1>

                <h3 className="search-headers">Songs</h3>
                <ul className="search">
                    {results.songs && results.songs.length
                        ? results.songs.map((song) => (
                            <li className = 'search-song-container'>
                            
                                <Link
                                    to={`/albums/${song.album_id}`}
                                    
                                >
                                    
                                    <p className="search-song-name">{song.title}</p>
                                    
                                   
                                </Link>
                            </li>
                        ))
                        : <li>No results found</li>
                    }
                </ul>


                <h3 className="search-headers">Artists</h3>
                <ul className="search">
                    {results.artists && results.artists.length
                        ? results.artists.map((artist) => (
                            <li key={`${artist.id - 1}`}>
                                <Link
                                    to={`/artists/${artist.id -1}`}
                                    className="artist-outter-link"
                                    
                                >  
                                    <p className="artist-link">{artist.name}</p>
                                </Link>
                            </li>
                        ))
                        : <li >No results found</li>
                    }
                </ul>

                <h3 className="search-headers">Albums</h3>
                <ul className="search">
                    {results.albums && results.albums.length ? (
                        results.albums.map((album) => (
                            <li>
                                <Link to={`/albums/${album.id}`} className="album-outter-link">
                                    <p className="album-link">{album.name}</p>
                                    {album.artist ? (
                                        <p className="album-artist-link">
                                            {album.artist.name} - {album.year}
                                        </p>
                                    ) : null}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No results found</li>
                    )}
                </ul>
                
            </div>
        );
    }
}

export default SearchShowComponent;
