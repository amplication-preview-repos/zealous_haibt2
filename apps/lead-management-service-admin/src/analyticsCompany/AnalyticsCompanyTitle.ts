import { AnalyticsCompany as TAnalyticsCompany } from "../api/analyticsCompany/AnalyticsCompany";

export const ANALYTICSCOMPANY_TITLE_FIELD = "id";

export const AnalyticsCompanyTitle = (record: TAnalyticsCompany): string => {
  return record.id?.toString() || String(record.id);
};
