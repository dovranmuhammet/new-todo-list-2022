import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
