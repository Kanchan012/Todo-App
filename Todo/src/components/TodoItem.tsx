import { useTodos } from "../context/TodoContext";
import type { Todo } from "../types/todo";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
   <div className="todo-item">
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    <span className={todo.completed ? "line-through text-gray-400" : ""}>
      {todo.title}
    </span>
    <span
      className={`priority ${
        todo.priority === "low"
          ? "priority-low"
          : todo.priority === "medium"
          ? "priority-medium"
          : "priority-high"
      }`}
    >
      {todo.priority}
    </span>
  </div>
  <button
    onClick={() => deleteTodo(todo.id)}
    className="delete"
  >
    Delete
  </button>
</div>
  );
}
