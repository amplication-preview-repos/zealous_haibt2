import { AnalyticsBusiness as TAnalyticsBusiness } from "../api/analyticsBusiness/AnalyticsBusiness";

export const ANALYTICSBUSINESS_TITLE_FIELD = "id";

export const AnalyticsBusinessTitle = (record: TAnalyticsBusiness): string => {
  return record.id?.toString() || String(record.id);
};
