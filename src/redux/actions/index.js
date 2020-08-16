import {ADD_TODO,TOOGLE_TODO,SET_VISIBILITY_FILTER} from './actionTypes'

let nextId=0;

export const addTodo=(text)=>{
    return {
        type:ADD_TODO,
        payload:{
            id:++nextId,
            text
        }
    }
}
export const toggleTodo=(id)=>{
    return {
        type:TOOGLE_TODO,
        id
    }
}
export const setVisibilityFilter=(filter)=>{
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

