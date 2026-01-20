import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

export default function CompletedTasks() {
  const { todos } = useTodos();
  const completed = todos.filter((t) => t.completed);

  return (
    <div className="p-4">
      {completed.length === 0 ? (
        <p>No completed tasks</p>
      ) : (
        completed.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
