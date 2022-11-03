import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoSliceActions } from '../../redux/todoSlice';
import css from './Todoitem.module.css'

const TodoItem = (props) =>{ // props === { }
    const [isInputShow, setInputShow] = useState(false)
    const [inputValue, setInputValue] = useState(props.text);
    const dispatch = useDispatch();

    const handleStatus = () => {
        dispatch(todoSliceActions.todoStatus(props.id))
    }

    const onDelete = () =>{
        dispatch( todoSliceActions.deleteTodo(props.id) )
    }

    const onEdit = () =>{
        setInputShow(!isInputShow)
    }

    const handleinputChange = (e) => {
        setInputValue(e.target.value)
    }

    const submit = (e) =>{
        e.preventDefault();
        // props.handleEdit(props.id, inputValue)
        dispatch(todoSliceActions.todoEdit({id: props.id, newText: inputValue}))
        setInputShow(false)
    }

    return(
        <div className={css.wrapper}>
            {
                isInputShow ? (
                    <form onSubmit={submit}>
                    <input onChange={handleinputChange} value={inputValue} type="text" placeholder='Todo' autoFocus/>
                    <button>Save</button>
                    </form>
                    ):(
                        <label>
                        <input onChange={handleStatus} type="checkbox" checked={props.boolean}/>
                        <span className={props.boolean ? css.text : ''}>{props.text}</span>
                        </label>
                        )
            }
            <div>
                <button id='edit' onClick={onEdit}>Edit</button>
                <button id="del" onClick={onDelete}>Del</button>
            </div>
            
        </div>
    )
}

export default TodoItem;