import { AnalyticsSubscriptionWhereInput } from "./AnalyticsSubscriptionWhereInput";
import { AnalyticsSubscriptionOrderByInput } from "./AnalyticsSubscriptionOrderByInput";

export type AnalyticsSubscriptionFindManyArgs = {
  where?: AnalyticsSubscriptionWhereInput;
  orderBy?: Array<AnalyticsSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
