import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

const AllTasks: React.FC = () => {
  const { todos } = useTodos();
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
export default AllTasks;