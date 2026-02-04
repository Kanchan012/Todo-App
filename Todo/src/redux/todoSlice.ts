import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo, Priority } from "../types/todo";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        title: string;
        priority: Priority;
        dueDate?: string;
        reminderTime?: string;
      }>
    ) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority,
        dueDate: action.payload.dueDate,
        reminderTime: action.payload.reminderTime,
        reminderEnabled: !!action.payload.reminderTime,
        reminderSent: false,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },

    markReminderSent: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.reminderSent = true;
    },

    updateTodo: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        priority: Priority;
        dueDate?: string;
        reminderTime?: string;
      }>
    ) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.priority = action.payload.priority;
        todo.dueDate = action.payload.dueDate;
        todo.reminderTime = action.payload.reminderTime;
        todo.reminderEnabled = !!action.payload.reminderTime;
        todo.reminderSent = false;
      }
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  markReminderSent,
} = todoSlice.actions;

export default todoSlice.reducer;
