import React from 'react';
import FilterLink from '../containers/FilterLink';
import {visibilityFilters} from '../redux/actions/actionTypes'


function Filters() {

    return(
        <div>
            Show: &nbsp;
          <FilterLink filter={visibilityFilters.SHOW_ALL} > 
              ALL 
            </FilterLink> 
            <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink> 
            <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    )
    
}
export default Filters;