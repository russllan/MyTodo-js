import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoSliceActions } from '../../redux/todoSlice';
import './CreateTodo.css'


const CreateTodo = ( ) =>{

    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    
    const submit = (event) =>{
        event.preventDefault();
        // props.Todo(value); Вместо этого использую редукс
        dispatch( todoSliceActions.addTodo(value) );
        setValue("");
    }
    const headleChange = (event) => {
        setValue(event.target.value)
        console.log(event.target.value);
    }
    
    return(
        <form onSubmit={submit} className='wrapper'>
            {/* <div>
         <button onClick={onPlus}>+</button>
            {sum}
        <button onClick={onMinus}>-</button>
        </div> */}
            <input value={value} onChange={headleChange} type="text" placeholder="Enter todo" autoFocus/>
            <button>+Create</button>
        </form>
    )
}
export default CreateTodo;