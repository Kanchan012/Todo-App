import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../redux/todoSlice";
import { toast } from "react-toastify";
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
      dispatch(updateTodo({ id: todo.id, title: editTitle, priority: editPriority }));
      toast.info("Task updated! ");
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.error("Task deleted! ");
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
    toast.success(todo.completed ? "Marked incomplete!" : "Task completed! ✅");
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
        <Button variant="secondary" onClick={() => setIsEditing(false)}>
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
          onChange={handleToggle}
        />
        {todo.title}
      </div>

      <Button variant="secondary" onClick={() => setIsEditing(true)}>
        Edit
      </Button>

      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
