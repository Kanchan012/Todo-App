import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const { addTodo } = useTodos();

  return (
    <div className="form">
      <input
        placeholder="Add new task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value as any)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => {
        if (title.trim()) {
          addTodo(title, priority);
          setTitle("");
        }
      }}>
        Add
      </button>
    </div>
  );
}
