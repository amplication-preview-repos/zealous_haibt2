import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "taskTitle";

export const TaskTitle = (record: TTask): string => {
  return record.taskTitle?.toString() || String(record.id);
};
