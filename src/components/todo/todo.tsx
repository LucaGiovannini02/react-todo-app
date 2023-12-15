import iTodo from "../../interfaces/todo"
import Bin from "./Bin.svg"
import CheckboxOff from "./Checkbox_Off.svg"
import CheckboxOn from "./Checkbox_On.svg"
import { CSSProperties, useEffect, useLayoutEffect } from "react"

const main: CSSProperties = {
    display: 'flex'
}

const bin: CSSProperties = {
    width: '40px',
    fill: '#F48889'
}

const checkBox: CSSProperties = {
    width: '40px',
    marginLeft: '40px'
}

const text = (completed: boolean): CSSProperties => {
    let style: CSSProperties = {marginLeft: '24px'}

    if (completed) { style = { ...style, textDecoration: 'line-through' } }

    return style
}

const Todo = (prop: iTodo) => {

    return (
        <>
            <div style={main}>
                <img src={Bin} style={bin} />
                { prop.completed ? 
                <img src={CheckboxOn} style={checkBox} /> :
                <img src={CheckboxOff} style={checkBox} /> }
                <p style={ text(prop.completed) }>{ prop.text }</p>
            </div>
        </>
    )


}

export default Todo