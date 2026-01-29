import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { Todo } from "../types/todo";

type Filter = "all" | "completed" | "incomplete";

export default function useTodos(filter: Filter = "all") {
  const all = useSelector((state: RootState) => state.todos.todos as Todo[]);

  const counts = useMemo(() => {
    const total = all.length;
    const completed = all.filter((t) => t.completed).length;
    const incomplete = total - completed;
    return { total, completed, incomplete };
  }, [all]);

  const todos = useMemo(() => {
    if (filter === "all") return all;
    if (filter === "completed") return all.filter((t) => t.completed);
    return all.filter((t) => !t.completed);
  }, [all, filter]);

  return { todos, counts } as const;
}
