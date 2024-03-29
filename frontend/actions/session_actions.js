// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_STATE = "RESET_STATE"
export const TOGGLE_PLAY_STATE = 'TOGGLE_PLAY_STATE';

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const clearErrors = () => (dispatch) => {
    dispatch(receiveErrors([]));
};

export const resetState = () => {
    return {
        type: RESET_STATE,
    }
}



export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            errors => (dispatch(receiveErrors(errors.responseJSON))
        ));
};
export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))),
            errors => (dispatch(receiveErrors(errors.responseJSON))
        ));
};
export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())
        ));
};

export const togglePlayState = (songId) => {
    return {
        type: TOGGLE_PLAY_STATE,
        songId
    }
}
