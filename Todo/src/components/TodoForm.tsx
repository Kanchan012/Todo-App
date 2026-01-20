import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import type { Priority } from "../types/todo";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTodo(title, priority);
    setTitle("");
    setPriority("low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-800"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className="px-2 py-1 rounded border dark:border-gray-700 dark:bg-gray-800"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        type="submit"
        className="px-4 py-1 rounded bg-yellow-400 dark:bg-yellow-600"
      >
        Add
      </button>
    </form>
  );
}
