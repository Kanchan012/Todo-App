export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  reminderTime?: string;
  reminderEnabled: boolean;
  reminderSent: boolean;
  createdAt: string;
}