import React from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../redux/actions'


function FilterLink(props) {
console.log("props",props)
    return(
        <div>
          
            
        </div>
    )
    
}
const mapStateToProps=(state,ownProps)=>{
    console.log("state",state);
    console.log("ownProps",ownProps);
    return{
        active:ownProps.filter===state.visibilityFilter
    }
   
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        setVisibilityFilter:()=>dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (FilterLink);