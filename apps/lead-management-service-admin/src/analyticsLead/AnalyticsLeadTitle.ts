import { AnalyticsLead as TAnalyticsLead } from "../api/analyticsLead/AnalyticsLead";

export const ANALYTICSLEAD_TITLE_FIELD = "id";

export const AnalyticsLeadTitle = (record: TAnalyticsLead): string => {
  return record.id?.toString() || String(record.id);
};
