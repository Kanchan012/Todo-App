import React, { useState } from "react";
import type { Todo, Priority } from "../types/todo";
import { useTodos } from "../context/TodoContext";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

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
      <div className="todo-item">
        <Input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          autoFocus
        />

        <Select
          value={editPriority}
          onChange={(e) => setEditPriority(e.target.value as Priority)}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />

        <Button onClick={handleUpdate}>Update</Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
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

      <Button variant="secondary" onClick={() => setIsEditing(true)}>
        Edit
      </Button>

      <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
