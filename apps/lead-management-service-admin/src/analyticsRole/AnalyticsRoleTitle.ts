import { AnalyticsRole as TAnalyticsRole } from "../api/analyticsRole/AnalyticsRole";

export const ANALYTICSROLE_TITLE_FIELD = "id";

export const AnalyticsRoleTitle = (record: TAnalyticsRole): string => {
  return record.id?.toString() || String(record.id);
};
