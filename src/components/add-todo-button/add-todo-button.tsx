import { CSSProperties } from 'react'
import { ReactComponent as Add } from './Adds.svg'

const main: CSSProperties = {
    border: '0px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#716FB2',
    borderRadius: '32px',
    padding: '16px 32px',
    color: 'black',
    boxShadow: '4px 12px 24px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer'
}

const svg: CSSProperties = {
    width: '40px',
    marginRight: '24px'
}

const AddTodoButton = () => {
    return (
        <>
            <div style={main}><Add style={svg} />Nuova voce</div>
        </>
    )
}

export default AddTodoButton