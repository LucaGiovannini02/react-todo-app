import { CSSProperties, useState } from "react"
import Todo from "../interfaces/todo"

const bg: CSSProperties = {
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0, 0, 0, 0.60)"
}

const surface: CSSProperties = {
    borderRadius: "32px",
    padding: "40px",
    backgroundColor: "#242424",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

interface Props {
    addTodo: (todo: Todo) => void,
    closeModal: () => void
}

const Modal = ({ addTodo, closeModal }: Props) => {
    const [todoText, setTodoText] = useState<string>()

    return (
        <>
            <div style={bg} onClick={closeModal}>
                <div style={surface} onClick={e => e.stopPropagation()}>
                    <textarea className="label" value={todoText} onChange={e => setTodoText(e.target.value)} placeholder="Inserisci voce"></textarea>

                    <button className="label-medium" disabled={!todoText} onClick={() => addTodo({ id: 0, text: todoText!, completed: false })}>Salva</button>
                </div>
            </div>
        </>
    )
}

export default Modal