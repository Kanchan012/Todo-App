import React from "react";
import type { Todo } from "../types/todo";
import { useTodos } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className={`title priority-${todo.priority}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.title}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
