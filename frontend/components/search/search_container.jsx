import { removeSearch, Search, SearchAll } from "../../actions/search_actions"
import { connect } from "react-redux";
import SearchComponent from "./search_component";

const mapStateToProps = (state, ownProps) => {
    return {
        songs: Object.values(state.searches.songs),
        albums: Object.values(state.searches.albums),
        artists: Object.values(state.searches.artists),
        searchTerm: ownProps.match.params.searchTerm
    };
}

const mapDispatchToProps = dispatch => {
    return {
        search: searchTerm => dispatch(Search(searchTerm)),
        searchAll: () => dispatch(SearchAll()),
        removeSearches: () => dispatch(removeSearch()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)