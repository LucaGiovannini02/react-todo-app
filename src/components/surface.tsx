import { CSSProperties } from 'react';
import iTodo from '../interfaces/todo';
import Todo from './todo';

const main: CSSProperties = {
    padding: '80px 160px',
    borderRadius: '32px',
}

interface Props {
    todos: iTodo[],
    delTodo: (todo: iTodo) => void,
    toggleTodo: (todo: iTodo) => void
}

const Surface = ({ todos, delTodo, toggleTodo }: Props) => {
    return (
        <>
            <div style={main} className="shadow bg-surface main">
                <div className='title' style={{ marginBottom: '64px' }}>Titolo</div>

                { todos && todos.map((todo: iTodo, i: number) => {
                    return <div key={i} style={i != todos.length - 1 ? { marginBottom: '40px' } : {}}><Todo key={todo.id} todo={todo} delTodo={delTodo} toggleTodo={toggleTodo} /></div>
                })}
            </div>
        </>
    )
}


export default Surface