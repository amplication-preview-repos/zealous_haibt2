import { AnalyticsProspect as TAnalyticsProspect } from "../api/analyticsProspect/AnalyticsProspect";

export const ANALYTICSPROSPECT_TITLE_FIELD = "id";

export const AnalyticsProspectTitle = (record: TAnalyticsProspect): string => {
  return record.id?.toString() || String(record.id);
};
