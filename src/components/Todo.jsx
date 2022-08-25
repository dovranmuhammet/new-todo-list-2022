import React from 'react'

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  return (
    <div className='todo'>
      <li className='todo-item'>{text}</li>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo
