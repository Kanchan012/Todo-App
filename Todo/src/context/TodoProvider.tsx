import { useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext"
import type { Todo, Priority } from "../types/todo";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? (JSON.parse(stored) as Todo[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string, priority: Priority) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, completed: false, priority },
    ]);
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
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
