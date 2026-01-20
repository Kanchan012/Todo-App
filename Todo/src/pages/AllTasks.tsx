import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

export default function AllTasks() {
  const { todos } = useTodos();

  return (
    <div className="p-4">
      {todos.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
