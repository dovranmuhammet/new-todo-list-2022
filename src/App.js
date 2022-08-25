import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className='App'>
      <header>
        <h1>TodoList</h1>
      </header>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
