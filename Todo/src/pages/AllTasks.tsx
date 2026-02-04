import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TodoItem from "../components/TodoItem";

const AllTasks = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
<<<<<<< HEAD
  
=======

>>>>>>> 7214f8db4e87e31babce0ffe0fc8601a43579797
  return (
    <div className="page p-4">
      <h2 className="text-xl font-bold mb-2">All Tasks</h2>
      {todos.length === 0 ? (
        <p>No tasks yet</p>
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

export default AllTasks;
