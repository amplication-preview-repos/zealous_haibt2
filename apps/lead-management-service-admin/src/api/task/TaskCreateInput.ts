export type TaskCreateInput = {
  assignedTo?: string | null;
  createdBy?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  taskTitle?: string | null;
};
