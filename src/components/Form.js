import React from 'react'

export const Form = () => {
  return (
    <form>
        <input type="text" className='todo-task__add-input' placeholder='Insert your task' />
        <button type="submit" className='todo-task__add-btn'>Add</button>
    </form>
  )
}
