import { useState } from 'react';
import './CreateTodo.css'


const CreateTodo = (props) =>{

    const [value, setValue] = useState("");
    const [sum, setSum] = useState(0);
    
    const submit = (event) =>{
        event.preventDefault();
        // alert(value)
        props.Todo(value);
        setValue("");
    }
    const headleChange = (event) => {
        setValue(event.target.value)
        console.log(event.target.value);
    }
    const onPlus = () => {
        setSum(sum+1) 
    }
    const onMinus = () =>{
        setSum(sum-1)
    }

    return(
        <form onSubmit={submit} className='wrapper'>
            {/* <div>
         <button onClick={onPlus}>+</button>
            {sum}
        <button onClick={onMinus}>-</button>
        </div> */}
            <input value={value} onChange={headleChange} type="text" placeholder="Enter todo"/>
            <button>+Create</button>
        </form>
    )
}
export default CreateTodo;