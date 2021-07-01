
import { connect } from "react-redux";


import SearchShowComponent from './search_show_component';

const mapStateToProps = (state) => {
    return {
        results: state.entities.search,
    };
};


export default connect(mapStateToProps, null)(SearchShowComponent);