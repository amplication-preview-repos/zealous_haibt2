import { AnalyticsTask as TAnalyticsTask } from "../api/analyticsTask/AnalyticsTask";

export const ANALYTICSTASK_TITLE_FIELD = "id";

export const AnalyticsTaskTitle = (record: TAnalyticsTask): string => {
  return record.id?.toString() || String(record.id);
};
