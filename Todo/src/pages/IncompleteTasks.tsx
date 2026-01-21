import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TodoItem from "../components/TodoItem";

const IncompleteTasks = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((t) => !t.completed)
  );

  return (
    <div className="page p-4">
      <h2 className="text-xl font-bold mb-2">Incomplete Tasks</h2>
      {todos.length === 0 ? (
        <p>No incomplete tasks yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncompleteTasks;
