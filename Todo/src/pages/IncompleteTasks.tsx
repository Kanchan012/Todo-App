import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

const IncompleteTasks: React.FC = () => {
  const { todos } = useTodos();
  const incomplete = todos.filter(t => !t.completed);

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
export default IncompleteTasks;