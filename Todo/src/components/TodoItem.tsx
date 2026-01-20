import React, { useState } from "react";
import type { Todo, Priority } from "../types/todo";
import { useTodos } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);

  const handleUpdate = () => {
    if (editTitle.trim()) {
      updateTodo(todo.id, editTitle, editPriority);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditPriority(todo.priority);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit task"
            autoFocus
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value as Priority)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleUpdate} className="btn-update">Update</button>
          <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        </div>
      </div>
    );
  }

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
      <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
      <button onClick={() => deleteTodo(todo.id)} className="btn-delete">Delete</button>
    </div>
  );
};

export default TodoItem;
