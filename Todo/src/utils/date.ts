export const isOverdue = (dueDate?: string, completed?: boolean) => {
  if (!dueDate || completed) return false;
  return new Date(dueDate) < new Date();
};
