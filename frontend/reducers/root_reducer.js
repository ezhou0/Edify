import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import searches from './searches_reducer'

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    searches,
    errors,
});

export default rootReducer;