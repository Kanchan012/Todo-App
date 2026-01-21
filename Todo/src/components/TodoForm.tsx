import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { toast } from "react-toastify";
import type { Priority } from "../types/todo";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTodo({ title, priority }));
    toast.success("Task added!");

    setTitle("");
    setPriority("low");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        options={[
          { value: "low", label: "Low Priority" },
          { value: "medium", label: "Medium Priority" },
          { value: "high", label: "High Priority" },
        ]}
      />

      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoForm;
