import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { markReminderSent } from "../redux/todoSlice";

export default function useReminders() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    const interval = setInterval(() => {
      const now = new Date(); 
      const currentTime = now.toTimeString().slice(0, 5); 

      todos.forEach((todo) => {
        if (
          todo.reminderEnabled &&
          !todo.reminderSent &&
          !todo.completed &&
          todo.reminderTime === currentTime
        ) {
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Task Reminder", {
              body: `Reminder: ${todo.title}`,
              tag: `todo-${todo.id}`,
            });
          }
          dispatch(markReminderSent(todo.id));
        }
      });
    }, 60000); 
    return () => clearInterval(interval);
  }, [todos, dispatch]);
}
