import { CSSProperties } from 'react'
import { ReactComponent as Add } from './Adds.svg'


const svg: CSSProperties = {
    marginRight: '24px'
}

const AddTodoButton = () => {
    return (
        <>
            <button style={{ padding: '16px 32px' }} className="label-medium"><Add style={svg} className="svg"/>Nuova voce</button>
        </>
    )
}

export default AddTodoButton