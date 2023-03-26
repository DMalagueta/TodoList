import React from 'react'
import Task from './Task'

export default function TaskList( {tasks}) {
    return(
        <>
            {
                tasks.map((task, index) => (
                    <Task task={task} key={index}/>
                ))
            }
        </>
    )
}
