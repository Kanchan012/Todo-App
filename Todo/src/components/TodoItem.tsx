import { useTodos } from "../context/TodoContext";
import type { Todo } from "../types/todo";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div
      className={`flex justify-between items-center p-2 border-b dark:border-gray-700 ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.title}</span>
        <span
          className={`px-2 py-0.5 rounded text-white text-xs ${
            todo.priority === "low"
              ? "bg-green-500"
              : todo.priority === "medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {todo.priority}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
