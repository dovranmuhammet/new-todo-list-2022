import React from 'react'

const TodoForm = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    console.log('You Clicked Me')
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ])
    setInputText('')
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type='text' />
      <button onClick={submitTodoHandler}>Submit</button>
    </form>
  )
}

export default TodoForm
