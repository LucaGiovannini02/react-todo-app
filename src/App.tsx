import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodoButton from './components/add-todo-button';
import Modal from './components/modal';
import Surface from './components/surface';
import Todo from './interfaces/todo';

const App = () => {
  const [modalToggle, setModalToggle] = useState(false)

  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || '{}'))
  
  const delTodo = (todo: Todo) => {
    let aus = todos.filter(data => data.id != todo.id)
  
    setTodos(aus)
  }

  const toggleTodo = (todo: Todo) => {
    let aus = todos.map((data) => {
      if(data.id == todo.id) {
        return { ...data, completed: !todo.completed }
      }

      return {...data} 
    })

    setTodos(aus)
  }

  const addTodo = (todo: Todo) => {
    todo.id = todos.length
    setTodos([ ...todos, todo ])
    changeModalToggle()
  }

  const changeModalToggle = () => {
    setModalToggle(!modalToggle)
  }

  const orderTodos = (todos: Todo[]): Todo[] => {
    let aus: Todo[] = []

    aus = [ ...todos.filter((data) => data.completed == false) ]
    aus = [ ...aus, ...todos.filter((data) => data.completed == true)]

    return aus
  }

  useEffect(() => {
    let aus: Todo[] = orderTodos(todos)

    if(JSON.stringify(aus) != JSON.stringify(todos)) { 
      let i = 0
      aus.map(data => {
        data.id = i
        i++
      })
      setTodos(aus)
    }

    console.log(todos)

    localStorage.setItem('todos' , JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Surface todos={todos} delTodo={delTodo} toggleTodo={toggleTodo} />
      <div style={{ marginTop: '24px' }} onClick={changeModalToggle}>
        <AddTodoButton />
      </div>
      {modalToggle && (<Modal addTodo={addTodo} closeModal={changeModalToggle} />)}
    </>
  );
}

export default App;
