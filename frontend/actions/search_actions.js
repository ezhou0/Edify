import * as SearchAPIUtil from "../util/search_api_util"

export const RECEIVE_SEARCH = "RECIEVE_SEARCH"
export const REMOVE_SEARCH = "REMOVE_SEARCH"

const receiveSearch = (searchRes) => {
    return {
        type: RECEIVE_SEARCH,
        searchRes
    }
}

export const removeSearch = () => {
    return {
        type: REMOVE_SEARCH
    }
}

export const thunkSearch = (searchTerm) => dispatch => SearchAPIUtil.search(searchTerm)
    .then(searchRes => dispatch(receiveSearch(searchRes)));

export const thunkSearchAll = () => dispatch => SearchAPIUtil.searchAll()
    .then(searchRes => dispatch(receiveSearch(searchRes)));