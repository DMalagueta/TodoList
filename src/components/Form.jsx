import React from "react";
import { useState } from "react";

export default function Form() {
  const [TaskInputValue, setTaskInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
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
