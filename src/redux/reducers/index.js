import {combineReducers} from 'redux';
import todo from './todo';
import visibilityFilter from './visibilityFilters'

const rootReducer=combineReducers({todo,visibilityFilter});
export default rootReducer;
