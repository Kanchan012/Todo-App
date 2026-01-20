import { createContext, useContext } from "react";
import type { Todo, Priority } from "../types/todo";

export interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, priority: Priority) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string, priority: Priority) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodos must be used inside TodoProvider");
  }
  return ctx;
}
