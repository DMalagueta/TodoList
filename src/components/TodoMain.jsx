import React from 'react'
import Form from './Form'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function TodoMain() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {id: uuidv4(), task: task, completed: false, isEditing: false}]);
    console.log(tasks);
  }

  return (
    <Form  addTask={addTask}/>
  )
}
