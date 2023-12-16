import { CSSProperties } from "react"
import iTodo from "../../interfaces/todo"
import Bin from "./Bin.svg"
import CheckboxOff from "./Checkbox_Off.svg"
import CheckboxOn from "./Checkbox_On.svg"

const main: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
}

const checkBox: CSSProperties = {
    marginLeft: '40px',
}

const text = (completed: boolean): CSSProperties => {
    let style: CSSProperties = {marginLeft: '24px'}

    if (completed) { style = { ...style, textDecoration: 'line-through' } }

    return style
}

interface Props {
    todo: iTodo,
    delTodo: (todo: iTodo) => void,
    toggleTodo: (todo: iTodo) => void
}

const Todo = ({ todo, delTodo, toggleTodo }: Props) => {    
    return (
        <>
            <div style={main}>
                <img src={Bin} className="svg" onClick={() => delTodo(todo)} />
                { todo.completed ? 
                <img src={CheckboxOn} style={checkBox} className="svg" onClick={() => toggleTodo(todo)} /> :
                <img src={CheckboxOff} style={checkBox} className="svg" onClick={() => toggleTodo(todo)} /> }
                <div style={ text(todo.completed) } className="label">{ todo.text }</div>
            </div>
        </>
    )


}

export default Todo