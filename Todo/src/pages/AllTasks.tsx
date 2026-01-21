import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const AllTasks = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h2>All Tasks</h2>

      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> — {todo.priority} —{" "}
              {todo.completed ? "Completed" : "Pending"}

              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                Toggle
              </button>

              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTasks;
