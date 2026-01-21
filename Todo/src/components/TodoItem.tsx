import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../redux/todoSlice";
import type { Todo, Priority } from "../types/todo";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);

  const handleUpdate = () => {
    if (editTitle.trim()) {
      dispatch(
        updateTodo({ id: todo.id, title: editTitle, priority: editPriority })
      );
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
      <div className="todo-item flex gap-2 items-center mb-2">
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
    <div
      className={`todo-item flex justify-between items-center p-2 border-b ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span>
          {todo.title} ({todo.priority})
        </span>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
