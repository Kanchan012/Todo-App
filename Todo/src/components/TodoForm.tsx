import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import type { Priority } from "../types/todo";

const TodoForm: React.FC = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, priority);
    setTitle("");
    setPriority("low");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
