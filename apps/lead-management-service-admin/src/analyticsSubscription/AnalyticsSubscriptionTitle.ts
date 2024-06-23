import { AnalyticsSubscription as TAnalyticsSubscription } from "../api/analyticsSubscription/AnalyticsSubscription";

export const ANALYTICSSUBSCRIPTION_TITLE_FIELD = "id";

export const AnalyticsSubscriptionTitle = (
  record: TAnalyticsSubscription
): string => {
  return record.id?.toString() || String(record.id);
};
