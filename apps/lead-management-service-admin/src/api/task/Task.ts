export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  taskTitle: string | null;
  updatedAt: Date;
};
