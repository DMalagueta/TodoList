import React from 'react'

export default function Task( {task} ) {
  return (
    <div className="todo-task">
        <div className="todo-task__name">{task.task}</div>
        <div className="todo-task__icons">edit | delete</div>
    </div>
  )
}
