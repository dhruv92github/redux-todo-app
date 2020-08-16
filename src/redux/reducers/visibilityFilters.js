import {SET_VISIBILITY_FILTER,visibilityFilters} from '../actions/actionTypes'

let initialState=visibilityFilters.SHOW_ALL;

const visibilityFilter=(state=initialState,action)=>{
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            
           return action.filter
    
        default:
         return  state;
    }

}

export default visibilityFilter;