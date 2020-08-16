import React,{useState} from 'react'
import {addTodo} from '../redux/actions'
import {connect} from 'react-redux'

 function AddTodo(props) {
console.log(props);
const [todo,setTodo]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    props.dispatch(addTodo(todo));
    setTodo('');
}
    return (
        <div>
            <form>
                <input type="text"
                value={todo}
                onChange={e=>setTodo(e.target.value)}
                required/> &nbsp; &nbsp;
                <button class="btn btn-primary"
                onClick={handleSubmit}
                >Add Todo</button>
            </form>
        </div>
    )
}
export default connect()(AddTodo)