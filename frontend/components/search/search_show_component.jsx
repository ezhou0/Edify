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
                        : <li className = 'no-search'>No results found</li>
                    }
                </ul>


                <h3 className="search-headers">Artists</h3>
                <ul className="search-artist-container" >
                    {results.artists && results.artists.length
                        ? results.artists.map((artist) => (
                            <li key={`${artist.id - 1}`} >
                                <Link
                                    to={`/artists/${artist.id -1}`}
                                    className='profile-item'
                                    
                                >  
                                    <div className='profile_pic'>
                                        <img src={artist.photo} />
                                    </div>

                                    <div className='profile_name'>
                                        <div>{artist.name}</div>
                                        <div className='profile_item_description'>Artist</div>
                                    </div>
                                </Link>
                            </li>
                        ))
                        : <li className = 'no-search' >No results found</li>
                    }
                </ul>

                <h3 className="search-headers">Albums</h3>
                <ul className="search" className='search-album-container'>
                    {results.albums && results.albums.length ? (
                        results.albums.map((album) => (
                            <li >
                                <Link to={`/albums/${album.id}`} className="album_item_div">
                                    <div className='album_item_cover'>
                                        {album.photo}
                                    </div>
                                    <div className='album_title_div'>
                                        <div>
                                            {album.name}
                                        </div>
                                        <div className='album_year'>
                                            {album.year} • Album
                                        </div>
                                        {album.artist ? (
                                            <div className="album-artist-link">
                                                {album.artist.name}
                                            </div>
                                        ) : null} 


                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                            <li className='no-search'>No results found</li>
                    )}
                </ul>
                
            </div>
        );
    }
}

export default SearchShowComponent;
