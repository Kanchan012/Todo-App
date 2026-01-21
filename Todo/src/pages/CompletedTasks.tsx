import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TodoItem from "../components/TodoItem";

const CompletedTasks = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((t) => t.completed)
  );

  return (
    <div className="page p-4">
      <h2 className="text-xl font-bold mb-2">Completed Tasks</h2>
      {todos.length === 0 ? (
        <p>No completed tasks yet</p>
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

export default CompletedTasks;
