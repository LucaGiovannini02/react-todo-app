import React from 'react';
import './App.css';
import AddTodoButton from './components/add-todo-button';
import Surface from './components/surface';
import Todo from './interfaces/todo';

const data: Todo[] = [
  { text: "prova", completed: false },
  { text: "prova1", completed: true },
  { text: "prova2", completed: true },
  { text: "prova3", completed: false },
]

const App = () => {
  return (
    <>
      <Surface {...data} />
      <div style={{ marginTop: '24px' }}>
        <AddTodoButton />
      </div>
    </>
  );
}

export default App;
