import React from 'react'

export default function Task( {task} ) {
  return (
    <div>
        <div>{task.task}</div>
        <div>edit | delete</div>
    </div>
  )
}
