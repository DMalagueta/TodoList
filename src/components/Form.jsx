import React from "react";
import { useState } from "react";

export default function Form({ addTask }) {
  const [TaskInputValue, setTaskInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(TaskInputValue);
    setTaskInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        name="taskInput"
        className="task-add__input"
        id=""
        onChange={(e) => setTaskInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="task-add__btn"
      >
        Add
      </button>
    </form>
  );
}
