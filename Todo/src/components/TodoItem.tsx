import React from "react";
import { useTodos } from "../context/TodoContext";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <span className="title">{todo.title}</span>
      <span className={`priority priority-${todo.priority}`}>
        {todo.priority}
      </span>
      <div>
        <button
          className="toggle-btn"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
