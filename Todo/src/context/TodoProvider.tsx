import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo, Priority } from "../types/todo";
import { toast } from "react-toastify";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? (JSON.parse(stored) as Todo[]) : [];
  });

  const createTodo = (title: string, priority: Priority): Todo => ({
  id: Date.now(),
  title,
  completed: false,
  priority,
  reminderEnabled: false,
  reminderSent: false,
  createdAt: Date(),
});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

const addTodo = (title: string, priority: Priority) => {
  setTodos(prev => [...prev, createTodo(title, priority)]);
  toast.success("Task added successfully");
};


  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    if (window.confirm("Delete this task?")) {
      setTodos(prev => prev.filter(t => t.id !== id));
      toast.error("Task deleted 🗑");
    }
  };

  const updateTodo = (id: number, title: string, priority: Priority) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, title, priority } : t
      )
    );
    toast.info("Task updated ✏");
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
