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
  const [priority, setPriority] =useState<Priority>("low");
  const [dueDate, setDueDate] = useState("")
  const [reminderTime, setReminderTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTodo({ title, priority, dueDate, reminderTime }));
    toast.success("Task added!");
    setTitle("");
    setPriority("low");
    setDueDate("");
    setReminderTime("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
       <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Input
        type="time"
        placeholder="Reminder time"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        title="Set a reminder time for this task"
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
