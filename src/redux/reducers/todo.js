import {ADD_TODO,TOOGLE_TODO} from '../actions/actionTypes'

const initialState=[];

const todo=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TODO:
            const {id,text}=action.payload;
            return [
               ...state, 
               {
                   id,
                   text,
                   completed:false 
               }
            ]
            
        case TOOGLE_TODO:

           return state.map(todo=>
            (todo.id===action.id)?{...todo,completed:!todo.completed}:todo
            )
                
        default:
        return state;
    }
}

export default todo;