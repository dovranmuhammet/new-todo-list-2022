import React from 'react'

const TodoForm = ({ inputValue, setInputValue, todos, setTodos }) => {
  const handleInputValue = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const onSubmitTodo = (e) => {
    e.preventDefault()

    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        id: Math.random() * 1000,
      },
    ])
    setInputValue('')
  }

  return (
    <form>
      <input
        type='text'
        onChange={handleInputValue}
        value={inputValue}
        className='todo-button'
      />
      <button type='submit' onClick={onSubmitTodo} className='todo-button'>
        Add
      </button>
    </form>
  )
}

export default TodoForm
