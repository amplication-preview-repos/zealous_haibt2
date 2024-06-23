import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  taskTitle?: SortOrder;
  updatedAt?: SortOrder;
};
