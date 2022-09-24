import { useState } from 'react'
import css from './Todoitem.module.css'

const TodoItem = (props) =>{ // props === { }

    const [isInputShow, setInputShow] = useState(false)

    const onDelete = () =>{
        props.handleDelete(props.id)
    }

    const onEdit = () =>{
        setInputShow(!isInputShow)
    }
    return(
        <div className={css.wrapper}>
            {
                isInputShow ? (
                    <form>
                    <input value={props.text} type="text" placeholder='Todo' />
                    <button>Save</button>
                    </form>
                    ):(
                        <label>
                        <input onChange={() => props.handleStatus(props.id)} type="checkbox" checked={props.boolean}/>
                        <span className={props.boolean ? css.text : ''}>{props.text}</span>
                        </label>
                        )
            }
            <div>
                <button id='edit' >Edit</button>
                <button id="del" onClick={onDelete}>Del</button>
            </div>
            
        </div>
    )
}

export default TodoItem;