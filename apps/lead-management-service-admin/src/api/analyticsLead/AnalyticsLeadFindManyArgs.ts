import { AnalyticsLeadWhereInput } from "./AnalyticsLeadWhereInput";
import { AnalyticsLeadOrderByInput } from "./AnalyticsLeadOrderByInput";

export type AnalyticsLeadFindManyArgs = {
  where?: AnalyticsLeadWhereInput;
  orderBy?: Array<AnalyticsLeadOrderByInput>;
  skip?: number;
  take?: number;
};
