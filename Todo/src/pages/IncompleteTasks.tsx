import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

export default function IncompleteTasks() {
  const { todos } = useTodos();
  const incomplete = todos.filter((t) => !t.completed);

  return (
    <div className="p-4">
      {incomplete.length === 0 ? (
        <p>No incomplete tasks</p>
      ) : (
        incomplete.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
