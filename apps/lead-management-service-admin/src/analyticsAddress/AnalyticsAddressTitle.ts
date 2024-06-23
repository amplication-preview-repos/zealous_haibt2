import { AnalyticsAddress as TAnalyticsAddress } from "../api/analyticsAddress/AnalyticsAddress";

export const ANALYTICSADDRESS_TITLE_FIELD = "id";

export const AnalyticsAddressTitle = (record: TAnalyticsAddress): string => {
  return record.id?.toString() || String(record.id);
};
