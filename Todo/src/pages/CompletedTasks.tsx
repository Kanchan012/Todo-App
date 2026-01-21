import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

const CompletedTasks: React.FC = () => {
  const { todos } = useTodos();
  const completed = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list">
      {completed.length === 0 ? (
        <p>No completed tasks</p>
      ) : (
        completed.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
export default CompletedTasks;