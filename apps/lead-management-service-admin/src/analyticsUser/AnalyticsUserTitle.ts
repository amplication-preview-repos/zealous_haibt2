import { AnalyticsUser as TAnalyticsUser } from "../api/analyticsUser/AnalyticsUser";

export const ANALYTICSUSER_TITLE_FIELD = "id";

export const AnalyticsUserTitle = (record: TAnalyticsUser): string => {
  return record.id?.toString() || String(record.id);
};
