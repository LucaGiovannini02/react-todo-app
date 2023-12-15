import { CSSProperties, useEffect } from 'react';
import iTodo from '../interfaces/todo';
import Todo from './todo';

const main: CSSProperties = {
    backgroundColor: '#242424',
    boxShadow: '4px 12px 24px rgba(0, 0, 0, 0.25)',
    padding: '80px 160px',
    borderRadius: '32px'
}

const Surface = (prop: iTodo[]) => {
    return (
        <>
            <div style={main}>
                <h1>Titolo</h1>

                {Object.values(prop).map((todo: iTodo) => {
                    return <Todo {...todo} />
                })}
            </div>
        </>
    )
}

export default Surface